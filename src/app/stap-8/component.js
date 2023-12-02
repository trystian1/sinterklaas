"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useContinueHook } from "../continue-hook"
import { Poem } from "../poem-component"
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
`
export const ContentComponent = () => {
    const [isImageShowing, setImageShow] = useState(false)
    const [isMp3Ready, setIsMp3Ready] = useState(false)
    const [podCastSubject, setPodCastSubject] = useState(false)
    const [loading, setIsLoading] = useState(false)

    
    return (<>
        <img class={`w-1/5 mt-6 transition-opacity ease-in duration-700`} src="geert.jpeg" />
        <audio controls autoPlay={true} loop={true}>
          <source
            src="geertje.mp3"
            type="audio/mpeg"
          />
        </audio>
    </>
    )
}