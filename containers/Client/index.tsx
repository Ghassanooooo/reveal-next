"use client";

import { useEffect, Fragment } from "react";
import Reveal from "../../js/reveal.js";
import RevealMarkdown from "../../plugin/markdown/markdown.esm.js";
import RevealHighlight from "../../plugin/highlight/highlight.esm.js";
import RevealNotes from "../../plugin/notes/notes.esm.js";
import { trpc } from "../../utils/trpc";
import { Slide } from "@/types/slide.js";

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

  trpc.onUpdateSlide.useSubscription(undefined, {
    onData: ({ indexh, indexv }: Slide) => {
      console.log(indexh, indexv, "  onData useSubscription :)");
      // retux store
      // useStore.setState({ indexh: data.indexh, indexv: data.indexv });
    },
  });

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
    });
    reveal.layout();
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default trpc.withTRPC(Client);

//export default Client;
