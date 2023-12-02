"use client"
import Link from "next/link"
import { useState } from "react"
import { useContinueHook } from "../continue-hook"
import { Poem } from "../poem-component"
const text = `Welkom, bij jouw suprise en tevens Sinterklaas gedicht. 
              Dit jaar is de Sint ook weer voor dit grapje gezwicht.
              Maar dit jaar zal het iets anders verlopen.
              Want de Sint kan niet zo lekker lopen.`
export const ContentComponent = () => {
    const [isImageShowing, setImageShow] = useState(false)
    useContinueHook('step-1', 'stap-2');
    return (<>
        <Poem text={text} callBack={() => setImageShow(true)}/>
        <img className={`w-2/5 mt-6 ${isImageShowing ? '' : 'opacity-0'}`} src="sinterklaas_voetbal.jpeg" />
    </>
    )
}