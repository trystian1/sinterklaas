"use client";

import { useState } from "react"
import ContinueComponent from "../components/continue-component";

export default function Component() {

    return (
        <>
           <h2 className="mb-3 text-2xl font-semibold">Weet je het laatste getal, maak het hangslot open en ga naar de volgende stap!</h2>
            <ContinueComponent step={'step-7'} next={'/continue-8'}/>
        </>
    )
}