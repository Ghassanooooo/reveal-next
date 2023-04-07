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
import RevealChalkboard from "@/plugin/chalkboard/plugin.js";
import RevealCustomControls from "@/plugin/customcontrols/plugin.js";

function Client({ children }: { children: React.ReactNode }) {
  /*const { isLoad, data, fetchNextPage, hasNextPage, isFetchingNextPage }: any =
    // @ts-ignore
    trpc.getSlide.useQuery(
      // @ts-ignore
      undefined,
      {
        onSuccess: ({ indexh, indexv }: Slide) => {
          console.log(indexh, indexv, "  onSuccess");
          // retux store
          // useStore.setState({ indexh: data.indexh, indexv: data.indexv });
        },
      }
    );*/
  const path = "";
  useEffect(() => {
    // @ts-ignore
    const reveal: any = new Reveal({
      plugins: [
        RevealChalkboard,
        RevealCustomControls,
        RevealMarkdown,
        RevealHighlight,
        RevealNotes,
      ],
    });
    //room-1
    reveal.initialize({
      // Display presentation control arrows
      controls: false,
      // Enable keyboard shortcuts for navigation
      keyboard: false,
      // Enables touch navigation on devices with touch input
      touch: false,
      chalkboard: {
        boardmarkerWidth: 3,
        chalkWidth: 7,
        chalkEffect: 1.0,
        storage: null,
        src: null,
        readOnly: undefined,
        transition: 800,
        theme: "chalkboard",
        background: ["rgba(127,127,127,.1)", path + "img/blackboard.png"],
        grid: { color: "rgb(50,50,10,0.5)", distance: 80, width: 2 },
        eraser: { src: path + "img/sponge.png", radius: 20 },
        boardmarkers: [
          {
            color: "rgba(100,100,100,1)",
            cursor: "url(" + path + "img/boardmarker-black.png), auto",
          },
          {
            color: "rgba(30,144,255, 1)",
            cursor: "url(" + path + "img/boardmarker-blue.png), auto",
          },
          {
            color: "rgba(220,20,60,1)",
            cursor: "url(" + path + "img/boardmarker-red.png), auto",
          },
          {
            color: "rgba(50,205,50,1)",
            cursor: "url(" + path + "img/boardmarker-green.png), auto",
          },
          {
            color: "rgba(255,140,0,1)",
            cursor: "url(" + path + "img/boardmarker-orange.png), auto",
          },
          {
            color: "rgba(150,0,20150,1)",
            cursor: "url(" + path + "img/boardmarker-purple.png), auto",
          },
          {
            color: "rgba(255,220,0,1)",
            cursor: "url(" + path + "img/boardmarker-yellow.png), auto",
          },
        ],
        chalks: [
          {
            color: "rgba(255,255,255,0.5)",
            cursor: "url(" + path + "img/chalk-white.png), auto",
          },
          {
            color: "rgba(96, 154, 244, 0.5)",
            cursor: "url(" + path + "img/chalk-blue.png), auto",
          },
          {
            color: "rgba(237, 20, 28, 0.5)",
            cursor: "url(" + path + "img/chalk-red.png), auto",
          },
          {
            color: "rgba(20, 237, 28, 0.5)",
            cursor: "url(" + path + "img/chalk-green.png), auto",
          },
          {
            color: "rgba(220, 133, 41, 0.5)",
            cursor: "url(" + path + "img/chalk-orange.png), auto",
          },
          {
            color: "rgba(220,0,220,0.5)",
            cursor: "url(" + path + "img/chalk-purple.png), auto",
          },
          {
            color: "rgba(255,220,0,0.5)",
            cursor: "url(" + path + "img/chalk-yellow.png), auto",
          },
        ],
      },
      customcontrols: {
        controls: [
          {
            icon: '<i class="fa fa-pen-square"></i>',
            title: "Toggle chalkboard (B)",
            action: "toggleChalkboard();",
          },
          {
            icon: '<i class="fa fa-pen"></i>',
            title: "Toggle notes canvas (C)",
            action: "toggleNotesCanvas();",
          },
        ],
      },
    });
    socket.emit("reloadPage");
    socket.on("reciveUpdate", (data: Slide) => {
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

// @ts-ignore
export default trpc.withTRPC(Client);
