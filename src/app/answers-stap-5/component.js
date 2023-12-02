"use client";

import { useState } from "react";

export const InputField = () => {

    const [inputText, setInputText] = useState(""); 
    const [givenAnswer, setGivenAnswer] = useState(false); 
    const sendAnswer = async () => {
        setGivenAnswer(true)
        await fetch(`https://whattoeat-cc0b1.ew.r.appspot.com/podcast-answer?subject=${inputText}`, { mode: 'no-cors' });
        //window.location = '/continue-3';
        
    }
    
    return(<>
            <h2 className="mb-3 text-2xl font-semibold">Deel 3</h2>
            {!givenAnswer && <>
            <h2 className="mb-3 text-2xl font-semibold">Vul hieronder je antwoord in!</h2>
            <h2 className="mb-3 text-2xl font-semibold">Over welk onderwerp wil jij graag een podcast horen?</h2>
            <h2 className="mb-3 text-2xl font-semibold">Wacht tot de volledige text op het scherm zichtbaar is, Marieke!</h2>
             <input className="text-black rounded w-full mb-3 p-4 mt-6" value={inputText} onChange={(ev) => {
                console.log(ev.target.value)
                setInputText(ev.target.value)
            }}></input></>}
            {!givenAnswer && <button className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => sendAnswer()}>Insturen</button>}
            {givenAnswer && <h2> Zit er onverhoopt geen getal verstopt in de podcast, probeer het opnieuw:</h2>}
            {givenAnswer && <button className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setGivenAnswer(false)}>Nog een keer proberen</button>}
            {givenAnswer && <h2> Weet jij welk getal er verstopt zit in de podcast, onthoud / schrijf op deze en ga verder:</h2>}
            {givenAnswer && <button className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => window.location = '/continue-6'}>Doorgaan naar de volgende opdracht</button>}
        </>
    )
}