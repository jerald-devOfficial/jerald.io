import React from "react";
import content from "../content";
import portfolio from "../images/portfolio.jpg";
import Typical from "react-typical";

function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-12">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-1">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={portfolio}
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-8 font-dosis font-bold">
            <div className="font-textMeOne uppercase text-4xl tracking-wide text-sm text-indigo-500 font-bold">
              {content.portfolio.text[0]}
            </div>
            <h2
              className={
                "text-3xl transform ${animated ? 'translate-y-0' : styleTranslate}  ${transition(2000)}"
              }
            >
              {content.portfolio.text[1]}
              <br />
              {content.portfolio.text[2]}
            </h2>
            <h1>
              {content.portfolio.text[3]}
              <Typical
                steps={content.portfolio.typical}
                loop={Infinity}
                className="inline-block"
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
