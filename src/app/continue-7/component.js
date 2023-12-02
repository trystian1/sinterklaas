"use client";

import { useState } from "react"
import ContinueComponent from "../components/continue-component";

export default function Component() {
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const [inCorrectAnswer, setIncorrectAnswer] = useState(false);
    const [inputText, setInputText] = useState("");
    const sendAnswer = () => {
        fetch(`http://localhost:8080/set-anwser-stap-4?inputText=${inputText}`)
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
           <h2 className="mb-3 text-2xl font-semibold">Weet je het laatste getal, maak het hangslot open en ga naar de volgende stap!</h2>
            <ContinueComponent step={'step-4'} next={'/continue-8'}/>
        </>
    )
}