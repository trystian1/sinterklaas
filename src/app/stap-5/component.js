"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useContinueHook } from "../continue-hook";
import { Poem } from "../poem-component";
const text = `Marieke streamt allerlei zaken in haar spaarzame vrij tijd
Van podcast tot series, Trystian is altijd zijn iPad kwijt
Die vrije tijd is de laatste tijd wat minder geworden.
Kleine Mats zorgt met zijn grappen en grollen voor wat horden.
Die Marieke is een goede moeder hoort de Sint van zijn pieten
Al kan ze soms wel iedereen in het huis schieten
Iedereen verspreid zijn rommel door het hele huis
Van Mats kan ze het hebben maar Trystian trapt ze het liefst in zijn kruis
Je staat graag in de aandacht dat weet de Sint.
Dus ben benieuwd wat je van het volgende vindt
We gaan een persoonlijke podcast voor je maken
En wellicht zit er iets in wat jou helpt de code te kraken
Luister goed, hou je oren en ogen open
Want voor je het weet laat je je kans lopen
Vul in waar je iets over wilt horen op je tweede scherm
En kies alsjeblieft voor een kosjere term
`;
export const ContentComponent = () => {
  const [isImageShowing, setImageShow] = useState(false);
  const [isMp3Ready, setIsMp3Ready] = useState(false);
  const [podCastSubject, setPodCastSubject] = useState(false);
  const [loading, setIsLoading] = useState(false);
  useContinueHook("step-5", "stap-6");

  const ref = useRef(null);

  useEffect(() => {
    console.log("RUN?");
    const getAnswer = async () => {
      setTimeout(async () => {
        const response = await fetch(
          "http://localhost:8080/ready-podcast-state"
        );
        const data = await response.json();
        if (data.podcastSubject) {
          setPodCastSubject(data.podcastSubject);
          setIsLoading(true);
        }

        if (data.podcastReady) {
          setIsMp3Ready(true);
          setIsLoading(false);
        } else {
          getAnswer();
        }
      }, 1500);
    };
    getAnswer();
  }, []);

  useEffect(() => {
    if (ref.current) {
        document.querySelector('audio').play()
    }
  }, [ref.current, isMp3Ready])

  return (
    <>
      <Poem text={text} callBack={() => setImageShow(true)} />
      {podCastSubject && (
        <Notification
          text={`Marieke wilt een podcast over: ${podCastSubject}`}
        />
      )}
      {loading && (
        <>
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          <h2>
            Podcast piet is even aan het opnemen. Even geduld, haal even een
            biertje voor Trystian
          </h2>
        </>
      )}
      {isMp3Ready && (
        <audio ref={ref} controls autoPlay={true} loop={true}>
          <source
            src="http://localhost:8080/download-podcast"
            type="audio/mpeg"
          />
        </audio>
      )}
      <img
        className={`w-2/5 mt-6 transition-opacity ease-in duration-700 opacity-100 ${
          isImageShowing ? "" : "opacity-0"
        }`}
        src="podcast_piet.jpeg"
      />
    </>
  );
};

const Notification = ({ text }) => {
  return (
    <>
      <div
        id="toast-default"
        className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLineCap="round"
              strokeLineJoin="round"
              strokeWidth="2"
              d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
            />
          </svg>
          <span className="sr-only">Fire icon</span>
        </div>
        <div className="ms-3 text-sm font-normal">{text}</div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-default"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLineCap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
