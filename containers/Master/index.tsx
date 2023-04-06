"use client";

import { useEffect, Fragment } from "react";
import Reveal from "@/js/reveal.js";
import RevealMarkdown from "@/plugin/markdown/markdown.esm.js";
import RevealHighlight from "@/plugin/highlight/highlight.esm.js";
import RevealNotes from "@/plugin/notes/notes.esm.js";
import { trpc } from "@/utils/trpc";
import { Slide } from "@/types/slide";
import { setIndexh, setIndexv } from "@/store/slideSlice";
import { useSelector, useDispatch } from "react-redux";
import { socket } from "@/utils/socket";
import SlidesComponent from "@/components/Slides";

function Master({ children }: { children: React.ReactNode }) {
  const { indexh, indexv }: Slide = useSelector((state: any) => state.slide);
  const dispatch = useDispatch();
  console.log(indexh, indexv, "  useSelector");

  const { isLoad, data, fetchNextPage, hasNextPage, isFetchingNextPage }: any =
    // @ts-ignore
    trpc.getSlide.useQuery(
      // @ts-ignore
      undefined, // no input
      {
        onSuccess: ({ indexh, indexv }: any) => {
          console.log(indexh, indexv, "  onSuccess");
          dispatch(setIndexh(indexh));
          dispatch(setIndexv(indexv));
        },
      }
    );

  console.log("data getSlide ", data);
  // @ts-ignore
  const { isLoading, mutate } = trpc.updateSlide.useMutation({
    retry: false,
    onSuccess: ({ indexh, indexv }: any) => {
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
  }, [mutate]);

  return (
    <Fragment>
      <SlidesComponent />
    </Fragment>
  );
}

// @ts-ignore
export default trpc.withTRPC(Master);
