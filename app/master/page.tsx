//import Preloader from "@/containers/Redux/Preloader";
import Providers from "@/containers/Redux/Provider";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { setIndexh, setIndexv } from "@/store/slideSlice";
import { store } from "@/store";

const Master: any = dynamic(() => import("@/containers/Master"), {
  ssr: false,
});

const slideData = {
  indexh: 0,
  indexv: 0,
};

async function Index() {
  store.dispatch(setIndexh(slideData.indexh));
  store.dispatch(setIndexv(slideData.indexv));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Providers>
        <Master />
      </Providers>
    </Suspense>
  );
}

export default Index;
