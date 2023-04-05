"use client";

import { useEffect, Fragment, useState } from "react";
import Reveal from "../../js/reveal.js";
import RevealMarkdown from "../../plugin/markdown/markdown.esm.js";
import RevealHighlight from "../../plugin/highlight/highlight.esm.js";
import RevealNotes from "../../plugin/notes/notes.esm.js";
import { trpc } from "../../utils/trpc";
import { Slide } from "@/types/slide";
import { setIndexh, setIndexv } from "@/store/slideSlice";

//import { Store } from "@/types/store";
import { useSelector, useDispatch } from "react-redux";
import { io } from "socket.io-client";
const socket = io("http://localhost:4001");
function Presentation({ children }: { children: React.ReactNode }) {
  const { indexh, indexv }: Slide = useSelector((state: any) => state.slide);
  const dispatch = useDispatch();
  console.log(indexh, indexv, "  useSelector");

  const { isLoad, data, fetchNextPage, hasNextPage, isFetchingNextPage }: any =
    trpc.getSlide.useQuery(
      undefined, // no input
      {
        onSuccess: ({ indexh, indexv }: Slide) => {
          console.log(indexh, indexv, "  onSuccess");
          dispatch(setIndexh(indexh));
          dispatch(setIndexv(indexv));
          // retux store
          // useStore.setState({ indexh: data.indexh, indexv: data.indexv });
        },
      }
    );

  console.log("data getSlide ", data);

  const { isLoading, mutate } = trpc.updateSlide.useMutation({
    retry: false,
    onSuccess: ({ indexh, indexv }) => {
      dispatch(setIndexh(indexh));
      dispatch(setIndexv(indexv));
    },
    onError: (err: any) => console.error(err.message),
  });
  useEffect(() => {
    (async () => {
      // @ts-ignore
      const reveal: any = new Reveal({
        plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
      });
      reveal.initialize({});

      reveal.layout();
      reveal.on("slidechanged", async ({ indexh, indexv }: Slide) => {
        mutate({ indexh, indexv });
        socket.emit("update", { indexh, indexv });
        console.log(indexh, indexv, "  reveal");
      });
    })();
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default trpc.withTRPC(Presentation);
//export default Presentation;
