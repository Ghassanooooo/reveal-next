import dynamic from "next/dynamic";
import { Suspense } from "react";

import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../util/getQueryClient";

const Client = dynamic(() => import("@/containers/Client"), {
  ssr: false,
});

async function Index() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["presentation"], async () => {
    return { indexh: 0, indexv: 0 };
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Suspense fallback={<div>Loading...</div>}>
        <Client>
          <Suspense fallback={<div>Loading...</div>}>
            <section>Next</section>
            <section data-auto-animate>
              <ul>
                <li>Mercury</li>
                <li>Jupiter</li>
                <li>Mars</li>
              </ul>
            </section>
            <section data-auto-animate>
              <ul>
                <li>Mercury</li>
                <li>Earth</li>
                <li>Jupiter</li>
                <li>Saturn</li>
                <li>Mars</li>
              </ul>
            </section>
            <section data-transition="zoom">The train goes on …</section>
            <section data-transition="slide">and on …</section>
            <section data-transition="slide-in fade-out">and stops.</section>
            <section data-transition="fade-in slide-out">
              (Passengers entering and leaving)
            </section>
            <section data-transition="convex">And it starts convex.</section>
            <section data-transition="concave">And it starts concave.</section>

            <section data-background-color="aquamarine">
              Horizontal Slide
            </section>
            <section data-background-color="rgb(70, 70, 255)">
              <section>Vertical Slide 1</section>
              <section>Vertical Slide 2</section>
            </section>
            <section data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)">
              <h2>🐟</h2>
            </section>
          </Suspense>
        </Client>
      </Suspense>
    </Hydrate>
  );
}

export default Index;
