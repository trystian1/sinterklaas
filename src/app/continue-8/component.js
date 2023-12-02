"use client";

import { useState } from "react"
import ContinueComponent from "../components/continue-component";

export default function Component() {
    return (
        <>
           <h2 className="mb-3 text-2xl font-semibold">Ga door om te horen wat de premier te zeggen heeft!</h2>
           <ContinueComponent step={'step-8'} next={'/continue-9'}/>
        </>
    )
}