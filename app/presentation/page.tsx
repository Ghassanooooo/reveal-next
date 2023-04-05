//import Preloader from "@/containers/Redux/Preloader";
import Providers from "@/containers/Redux/Provider";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { setIndexh, setIndexv } from "@/store/slideSlice";
import { store } from "@/store";

const Presentation = dynamic(() => import("@/containers/Presentation"), {
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
        <Presentation>
          <section
            data-background-color="aquamarine"
            data-markdown=""
            dangerouslySetInnerHTML={{
              __html: `
          ## Slide 1
          A paragraph with some text and a [link](https://hakim.se).
          ---
          ## Slide 2
          ---
          ## Slide 3
          `,
            }}
          ></section>
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

          <section data-background-color="aquamarine">Horizontal Slide</section>
          <section data-background-color="rgb(70, 70, 255)">
            <section>Vertical Slide 1</section>
            <section>Vertical Slide 2</section>
          </section>
          <section data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)">
            <h2>🐟</h2>
          </section>
        </Presentation>
      </Providers>
    </Suspense>
  );
}

export default Index;
