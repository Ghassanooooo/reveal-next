"use client";
import { Fragment } from "react";
import { trpc } from "@/utils/trpc";
import SlidesComponent from "@/components/Slides";
import useMasterReveal from "@/hooks/useMasterReveal";

function Master() {
  useMasterReveal();
  //const { indexh, indexv }: Slide = useSelector((state: any) => state.slide);

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

  return (
    <Fragment>
      <SlidesComponent />
    </Fragment>
  );
}

// @ts-ignore
export default trpc.withTRPC(Master);
