import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";

const Layout: any = dynamic(() => import("@/containers/Layout/Layout"), {
  ssr: false,
});
async function Index() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

        <div className="grid lg:grid-cols-3 gap-5 mb-16">
          <div className="rounded bg-white h-40 shadow-sm"></div>
          <div className="rounded bg-white h-40 shadow-sm"></div>
          <div className="rounded bg-white h-40 shadow-sm"></div>
        </div>
        <div className="grid col-1 bg-white h-96 shadow-sm"></div>
      </Layout>
    </Suspense>
  );
}

export default Index;
