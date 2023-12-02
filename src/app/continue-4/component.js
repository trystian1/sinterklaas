"use client";

import { useState } from "react"
import ContinueComponent from "../components/continue-component";

export default function Component() {
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const [inCorrectAnswer, setIncorrectAnswer] = useState(false);
    const [inputText, setInputText] = useState("");
    const sendAnswer = () => {
        fetch(`https://whattoeat-cc0b1.ew.r.appspot.com/set-anwser-stap-4?inputText=${inputText}`)
            .then(data => data.json())
            .then(data => {
                if (data.correct) {
                    setCorrectAnswer(true);
                } else {
                    setIncorrectAnswer(true)
                }
            })

    }

    return (
        <>
           <h2 className="mb-3 text-2xl font-semibold">Welke bekende vrouw herken je op het schilderij?</h2>
           {inCorrectAnswer && <h2 className="mb-3 text-2xl font-semibold">Antwoord is fout!!!!!!!!!!!!</h2>}
           <input className="text-black rounded w-full mb-3 p-4 mt-6" value={inputText} onChange={(ev) => {
                console.log(ev.target.value)
                setInputText(ev.target.value)
            }}></input>
            <button className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-opacity ease-in duration-700 opacity-100" onClick={() => sendAnswer()}>Insturen</button>
            {correctAnswer && <h2 className="mb-3 text-2xl font-semibold">Antwoord is goed!!!!!!!!!!!!</h2>}
            {correctAnswer &&
                <ContinueComponent step={'step-4'} next={'/answers-stap-5'}/>
            }
        </>
    )
}