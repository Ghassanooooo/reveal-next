import express, { Express, Request, Response } from "express";
import { initTRPC } from "@trpc/server";
import { z } from "zod";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

const app: Express = express();

const port = process.env.PORT || 8000;
const origin = process.env.ORIGIN || "http://localhost:4000";

app.use(cors({ origin, credentials: true }));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const t = initTRPC.create();

const router = t.router;
const publicProcedure = t.procedure;

const appRouter = router({
  getSlide: publicProcedure.query(({ ctx }) => {
    return { indexh: 0, indexv: 0 };
  }),

  updateSlide: publicProcedure
    .input(z.object({ indexh: z.number(), indexv: z.number() }))
    .output(z.object({ indexh: z.number(), indexv: z.number() }))
    .mutation(({ ctx, input }) => {
      console.log("updateSlide server", input);
      return input;
    }),
});

app.use(
  "/trpc",
  createExpressMiddleware({ router: appRouter, createContext: () => ({}) })
);

app.listen(port, () => {
  console.log(`⚡️[server]: Port: ${port}`);
});

export type AppRouter = typeof appRouter;
