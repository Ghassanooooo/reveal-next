import dynamic from "next/dynamic";
import { Suspense } from "react";

async function Index() {
  return (
    <>
      <img
        src="/wave.png"
        className="fixed hidden lg:block inset-0 h-full"
        style={{ zIndex: -1 }}
      />

      <div className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
        <img
          src="/unlock.svg"
          className="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto"
        />
        <form className="flex flex-col justify-center items-center w-1/2">
          <img src="/avatar.svg" className="w-32" />
          <h2 className="my-8 font-display font-bold text-3xl text-gray-700 text-center">
            Welcome to Your Lesson
          </h2>
          <div className="relative">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-warning w-full max-w-xs"
            />
          </div>

          <button className="btn btn-active btn-warning mt-8">Join</button>
        </form>
      </div>
    </>
  );
}

export default Index;
