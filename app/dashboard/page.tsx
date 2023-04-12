import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";

async function Index() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>dashboard</div>
    </Suspense>
  );
}

export default Index;
