"use client"

import { useContinueHook } from "../continue-hook";

export const ContentComponent = () => {    
    useContinueHook('step-7', 'stap-8');
    return (<>
         <h2 className="mb-3 text-2xl font-semibold">Wat is het laatste getal ?</h2>
         <div className="flex justify-center">
    `        <img className={`w-1/5 mt-6 transition-opacity ease-in duration-700 opacity-100 inline-block`} src="1.2.jpeg" />
            <img className={`w-1/5 mt-6 transition-opacity ease-in duration-700 opacity-100 inline-block`} src="1.3.jpeg" />
         </div>
         <div className="flex justify-center" >
            <img className={`w-1/5 mt-6 transition-opacity ease-in duration-700 opacity-100 inline-block`} src="sinterklaas.jpeg" />
            <img className={`w-1/5 mt-6 transition-opacity ease-in duration-700 opacity-100 inline-block`} src="sinterklaas_2.jpeg" />`
         </div>
    </>
    )
}