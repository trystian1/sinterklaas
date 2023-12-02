"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useContinueHook } from "../continue-hook"
import { Poem } from "../poem-component"
const text = `Twee van de drie cijfers zijn als het goed is nu bekend.
Is dit niet het geval dan blijven je kadootjes absent\n
De Sint staat altijd aan de kant bij jullie waterpolo
Kan hij zich ergens aanmelden als Gigolo?
Jij ben de laatste tijd een echte goalgetter
In het waterpolo veld ben jij een echte doorzetter\n
Bij jou thuis is het met Matsie ook altijd een plezier
Matsie is ook ontstaan uit plezier van een minuut of vier
Die kleine heeft ook veel lieve Opa’s en Oma’s
Aan het einde van de dag zijn die moe van het geraas\n
In de volgende stap zie je vier mooie plaatjes
We zoeken nog 1 cijfer dus niet zulke praatjes
Als je heel goed naar de afbeeldingen kijkt
Kom je achter het laatste cijfer en heb je het einde bereikt
`
export const ContentComponent = () => {
    const [isImageShowing, setImageShow] = useState(false)
    useContinueHook('step-6', 'stap-7');
    return (<>
        <Poem text={text} callBack={() => setImageShow(true)}/>
        <img class={`w-1/5 mt-6 transition-opacity ease-in duration-700 ${isImageShowing ? 'opacity-100' : 'opacity-0'}`} src="roodblik_2.jpeg" />
    </>
    )
}