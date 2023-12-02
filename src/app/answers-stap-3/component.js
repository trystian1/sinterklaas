"use client";

import { useState } from "react";
import ContinueComponent from "../components/continue-component";

export const InputField = () => {

    const [inputText, setInputText] = useState(""); 
    const [givenAnswer, setGivenAnswer] = useState(false); 
    const sendAnswer = async () => {
        await fetch(`http://localhost:8080/set-anwser-stap-3?inputText=${inputText}`);
        //window.location = '/continue-3';
        setGivenAnswer(true)
    }
    
    return(<>
            <h2 className="mb-3 text-2xl font-semibold">Deel 3</h2>
            {!givenAnswer && <>
            <h2 className="mb-3 text-2xl font-semibold">Vul hieronder je antwoord in!</h2>
            <h2 className="mb-3 text-2xl font-semibold">Wat moet er op je schilderij boven je bed staan?</h2>
            <h2 className="mb-3 text-2xl font-semibold">Wacht tot de volledige text op het scherm zichtbaar is, Marieke!</h2>
             <input className="text-black" value={inputText} onChange={(ev) => {
                console.log(ev.target.value)
                setInputText(ev.target.value)
            }}></input></>}
            {!givenAnswer && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => sendAnswer()}>Insturen</button>}
            {givenAnswer && <h2> Zie je geen getal in de afbeelding, probeer het opnieuw:</h2>}
            {givenAnswer && <h2> Weet je het cijfer? Schrijf het op en ga snel naar de volgende stap!</h2>}
            {givenAnswer && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => givenAnswer(false)}>Nog een keer proberen</button>}
            {givenAnswer && <ContinueComponent step="step-3" next={"stap-4"}/>}
        </>
    )
}