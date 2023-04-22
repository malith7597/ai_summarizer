import React from "react";
import { logo } from "../assets";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3 ">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-15 w-15"
          onClick={() => window.open("https://github.com/malith7597")}
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with
        <br className="max-md:hidden" />
        <span className="text-blue-500"> GPT-4</span>
      </h1>
      <h2 className="desc">
        {" "}
        <Typewriter
          options={{
            strings: [
              "Simplify your reading with summarize",
              "an open source article summarizer",
              " reduce the pain of reading lengthy articles.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
    </header>
  );
}

export default Hero;
