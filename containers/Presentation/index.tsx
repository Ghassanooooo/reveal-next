"use client";

import { useEffect, Fragment } from "react";
import Reveal from "../../js/reveal.js";
import RevealMarkdown from "../../plugin/markdown/markdown.esm.js";
import RevealHighlight from "../../plugin/highlight/highlight.esm.js";
import RevealNotes from "../../plugin/notes/notes.esm.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useStore from "../../store/useStore";

function Presentation({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useQuery({
    queryKey: ["presentation"],
    queryFn: () => {
      return { indexh: 0, indexv: 0 };
    },
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: any) => {},
    onMutate: async (data: any) => {
      await queryClient.cancelQueries(["presentation"]);
      queryClient.getQueryData(["presentation"]);
      queryClient.setQueryData(["presentation"], { ...data });
    },
    onError: (error: any, data: any, rollback: any) => {
      console.log("onError", error, data, rollback);
      queryClient.setQueryData(["presentation"], rollback?.previousData);
    },
  });

  useEffect(() => {
    // @ts-ignore
    const reveal: any = new Reveal({
      plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
    });
    reveal.initialize({});

    reveal.layout();
    reveal.on("slidechanged", ({ indexh, indexv }: any) => {
      useStore.setState({ indexh, indexv });
      mutation.mutate({ indexh, indexv });
    });
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default Presentation;
