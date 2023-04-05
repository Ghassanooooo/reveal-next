import express, { Express, Request, Response } from "express";
import { observable } from "@trpc/server/observable";
import { initTRPC } from "@trpc/server";

import { z } from "zod";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { applyWSSHandler } from "@trpc/server/adapters/ws";

import ws from "ws";
//import { EventEmitter } from "stream";
import { EventEmitter } from "events";

const app: Express = express();

const port = process.env.PORT || 8000;
const origin = process.env.ORIGIN || "*";

app.use(cors({ origin, credentials: true }));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const t = initTRPC.create();

const router = t.router;
const publicProcedure = t.procedure;

const data = { indexh: 0, indexv: 0 };

const eventEmitter = new EventEmitter();

const appRouter = router({
  getSlide: publicProcedure.query(({ ctx }) => {
    return data;
  }),

  updateSlide: publicProcedure
    .input(z.object({ indexh: z.number(), indexv: z.number() }))
    .output(z.object({ indexh: z.number(), indexv: z.number() }))
    .mutation(({ ctx, input }) => {
      data.indexh = input.indexh;
      data.indexv = input.indexv;
      console.log("updateSlide server", input);
      console.log("data server server ==> ", data);
      eventEmitter.emit("update", data);
      return input;
    }),
  onUpdateSlide: publicProcedure.subscription((inputs) => {
    console.log("onUpdateSlide server ws", inputs);
    return observable((emit) => {
      eventEmitter.on("update", emit.next);
      return () => {
        eventEmitter.off("update", emit.next);
      };
    });
  }),
});
const createContext = () => {
  return { isAuth: true };
};

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

const server = app.listen(port, () => {
  console.log(`⚡️[server]: Port: ${port}`);
});

const wss = new ws.Server({ server });

const handler = applyWSSHandler({
  wss,
  router: appRouter,
  createContext,
});

wss.on("connection", (ws) => {
  console.log(`➕➕ Connection (${wss.clients.size})`);
  ws.once("close", () => {
    console.log(`➖➖ Connection (${wss.clients.size})`);
  });
});
console.log("✅ WebSocket Server listening on ws://localhost:" + port);
process.on("SIGTERM", () => {
  console.log("SIGTERM");
  handler.broadcastReconnectNotification();
  wss.close();
});
// applyWSSHandler ==> is admin

export type AppRouter = typeof appRouter;
