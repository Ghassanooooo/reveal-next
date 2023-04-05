import { Server } from "socket.io";
import express, { Express, Request, Response } from "express";
import { initTRPC } from "@trpc/server";
import http from "http";
import { z } from "zod";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

const app: Express = express();
const server = http.createServer(app);
const port = process.env.PORT || 8000;
const origin = process.env.ORIGIN || "*";

app.use(cors({ origin, credentials: true }));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const t = initTRPC.create();

const router = t.router;
const publicProcedure = t.procedure;

const data = { indexh: 0, indexv: 0 };

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

      return input;
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

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket: any) => {
  console.log("IO connected  💪");
  socket.on("client-ready", () => {
    console.log("client-ready ❤️");
    socket.broadcast.emit("get-canvas-state");
  });

  socket.on("update", (update: any) => {
    console.log("received update", update);
    socket.broadcast.emit("reciveUpdate", update);
  });

  socket.on("clear", () => io.emit("clear"));
});
server.listen(port, () => {
  console.log(`⚡️[server]: Port: ${port}`);
});
export type AppRouter = typeof appRouter;
