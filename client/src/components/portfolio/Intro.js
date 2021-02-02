import React from "react";
import content from "../../content";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Typical from "react-typical";
import useStartAnimation from "../../hook/useStartAnimation";

function Intro() {
  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const styleTranslate = "translate-y-10 opacity-0";
  const animated = useStartAnimation();
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-between ">
        <div className="md:flex-shrink-1 w-full md:w-2/5">
          <LazyLoadImage
            className={`w-full mx-auto`}
            src={content.portfolio.img}
            effect="blur"
            alt="Man looking at item at a store"
          />
        </div>
        <div className="font-dosis w-full md:w-3/5 text-center md:text-left">
          <div
            className={`text-3xl md:text-4xl lg:text-6xl text-white font-bold transform ${
              animated ? "translate-y-0" : styleTranslate
            }  ${transition(2000)} `}
          >
            <h2>{content.portfolio.text[0]}</h2>
            <h2 className="inline">{content.portfolio.text[1]}</h2>
            <h2 className="text-indigo-500 inline">
              {content.portfolio.text[2]}
            </h2>
          </div>
          <h1
            className={`text-2xl md:text-4xl text-gray-400 transform ${
              animated ? "translate-y-0" : styleTranslate
            } ${transition(3000)} `}
          >
            <Typical
              steps={content.portfolio.typical}
              loop={Infinity}
              className="inline-block text-white"
              wrapper="p"
            />
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Intro;
