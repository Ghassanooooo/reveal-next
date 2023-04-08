"use client";

import { Fragment } from "react";
import SlidesComponent from "@/components/Slides";

import { trpc } from "../../utils/trpc";
import useClientReveal from "@/hooks/useClientReveal";

function Client() {
  // const { userId, setUserId, data, setData } = useGlobalContext();
  useClientReveal();
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

  return (
    <Fragment>
      <SlidesComponent />
    </Fragment>
  );
}

// @ts-ignore
export default trpc.withTRPC(Client);
