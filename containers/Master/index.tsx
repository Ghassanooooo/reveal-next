"use client";

import { useEffect, Fragment } from "react";
import Reveal from "@/js/reveal.js";
import RevealMarkdown from "@/plugin/markdown/markdown.esm.js";
import RevealHighlight from "@/plugin/highlight/highlight.esm.js";
//import RevealAnything from "@/plugin/anything/plugin";
import RevealNotes from "@/plugin/notes/notes.esm.js";
import { trpc } from "@/utils/trpc";
import { Slide } from "@/types/slide";
import { setIndexh, setIndexv } from "@/store/slideSlice";
import { useSelector, useDispatch } from "react-redux";
import { socket } from "@/utils/socket";
import SlidesComponent from "@/components/Slides";
import RevealChalkboard from "@/plugin/chalkboard/plugin.js";
import RevealCustomControls from "@/plugin/customcontrols/plugin.js";

function Master({ children }: { children: React.ReactNode }) {
  //const { indexh, indexv }: Slide = useSelector((state: any) => state.slide);
  const dispatch = useDispatch();
  /*
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
  });*/
  const path = "";
  useEffect(() => {
    (async () => {
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
      reveal.initialize({
        showNotes: true,
        defaultTiming: 123,
        totalTime: 123,
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

      reveal.layout();

      reveal.on("slidechanged", async ({ indexh, indexv }: Slide) => {
        // mutate({ indexh, indexv });
        dispatch(setIndexh(indexh));
        dispatch(setIndexv(indexv));
        socket.emit("update", { indexh, indexv });
        socket.on("reloadPage", () => {
          socket.emit("update", { indexh, indexv });
        });
      });
    })();
  }, []);

  return (
    <Fragment>
      <SlidesComponent />
    </Fragment>
  );
}

// @ts-ignore
export default trpc.withTRPC(Master);
