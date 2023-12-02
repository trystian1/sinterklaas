"use client"
import Link from "next/link"
import { useState } from "react"
import { useContinueHook } from "../continue-hook"
import { Poem } from "../poem-component"

const text2 = `
In dit gedicht zitten aanwijzingen naar een code verstopt. 
Waardoor je straks cadeaus krijgt als de combinate klopt. 
Zitten je cadeaus in dit mysterieuze rode blik?
Of is het toch een schaal model van de Sint zijn pik ?\n
Hou je aandacht bij dit gedicht en alles wat op het scherm gebeurt.
Niet zoals je normaal series kijkt, waar je vriend altijd over zeurt
Een code in dit gedicht vinden is de opdracht.
De Sint heeft dit heel erg goed doordacht.
`


const text = `In dit gedicht zitten aanwijzingen naar een code verstopt.\nWaardoor je straks cadeaus krijgt als de combinate klopt.\n Anders moet je morgen alsnog je schoen zetten.\nZie dit gedicht als een virtuele escape room\nKijk goed uit want straks zegt deze kist kaboem!`
export const ContentComponent = () => {
    const [isImageShowing, setImageShow] = useState(false)
    useContinueHook('step-2', 'stap-3');
    return (<>
        <Poem text={text2} callBack={() => setImageShow(true)}/>
        <img class={`w-2/5 mt-6 transition-opacity ease-in duration-700 opacity-100 ${isImageShowing ? '' : 'opacity-0'}`} src="sherlock_sint.jpeg" />
    </>
    )
}