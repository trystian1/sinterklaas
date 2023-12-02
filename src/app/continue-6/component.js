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
           <h2 className="mb-3 text-2xl font-semibold">Gewoon even lezen en ontspannen druk daarna op de knop!</h2>
           <ContinueComponent step={'step-6'} next={'/continue-7'}/>
        </>
    )
}