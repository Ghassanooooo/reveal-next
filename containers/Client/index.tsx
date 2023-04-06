"use client";

import { useEffect, Fragment } from "react";
import Reveal from "../../js/reveal.js";
import RevealMarkdown from "../../plugin/markdown/markdown.esm.js";
import RevealHighlight from "../../plugin/highlight/highlight.esm.js";
import RevealNotes from "../../plugin/notes/notes.esm.js";
import { trpc } from "../../utils/trpc";
import { Slide } from "@/types/slide.js";
import { socket } from "@/utils/socket";
import SlidesComponent from "@/components/Slides";
function Client({ children }: { children: React.ReactNode }) {
  const { isLoad, data, fetchNextPage, hasNextPage, isFetchingNextPage }: any =
    trpc.getSlide.useQuery(
      undefined, // no input
      {
        onSuccess: ({ indexh, indexv }: Slide) => {
          console.log(indexh, indexv, "  onSuccess");
          // retux store
          // useStore.setState({ indexh: data.indexh, indexv: data.indexv });
        },
      }
    );

  console.log("data getSlide ", data);

  useEffect(() => {
    // @ts-ignore
    const reveal: any = new Reveal({
      plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
    });

    reveal.initialize({
      // Display presentation control arrows
      controls: false,
      // Enable keyboard shortcuts for navigation
      keyboard: false,
      // Enables touch navigation on devices with touch input
      touch: false,
    });

    socket.on("reciveUpdate", (data: Slide) => {
      console.log("reciveUpdate :) ", data);
      reveal.slide(data.indexh, data.indexv);
    });
    reveal.layout();
  }, []);

  return (
    <Fragment>
      <SlidesComponent />
    </Fragment>
  );
}

export default trpc.withTRPC(Client);
