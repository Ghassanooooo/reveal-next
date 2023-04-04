"use client";

import { useEffect, Fragment } from "react";
import Reveal from "../../js/reveal.js";
import RevealMarkdown from "../../plugin/markdown/markdown.esm.js";
import RevealHighlight from "../../plugin/highlight/highlight.esm.js";
import RevealNotes from "../../plugin/notes/notes.esm.js";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useStore from "../../store/useStore";

function Client({ children }: { children: React.ReactNode }) {
  console.log("Client useStore", useStore.getState());
  const { data, isLoading } = useQuery({
    queryKey: ["presentation"],
    queryFn: () => {
      return { indexh: 0, indexv: 0 };
    },
  });

  const queryClient = useQueryClient();
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
    console.log(data, " Client recive slides data");
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default Client;
