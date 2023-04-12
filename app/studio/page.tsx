import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";
const Controls: any = dynamic(() => import("@/containers/Controls"), {
  ssr: false,
});
async function Index() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Controls />
    </Suspense>
  );
}

export default Index;
