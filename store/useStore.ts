import create from "zustand";
import { devtools } from "zustand/middleware";

export const store = (set: any) => ({
  indexh: 0,
  indexv: 0,
  setIndexh: (indexh: number) => set(() => ({ indexh })),
  setIndexv: (indexv: number) => set(() => ({ indexv })),
});

export default process.env.NODE_ENV === "development"
  ? create(devtools(store))
  : create(store);
