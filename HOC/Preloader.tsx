"use client";
import { useRef } from "react";
import { store } from "@/store";
import { setIndexh, setIndexv } from "../store/slideSlice";
import { Slide } from "../types/slide";

function Preloader({ slide }: { slide: Slide }) {
  console.log("Preloader", slide);
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setIndexh(slide.indexh));
    store.dispatch(setIndexv(slide.indexv));

    loaded.current = true;
  }

  return null;
}

export default Preloader;
