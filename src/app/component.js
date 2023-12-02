'use client';

import { useEffect } from "react";
import { useContinueHook } from './continue-hook';

export default function Component() {
    useContinueHook('step-0', 'stap-1');

    return (<div className="absolute" style={{ left: '20%', top: '20%'}}>
        <img className={`w-3/5 mt-6 transition-opacity ease-in duration-700 opacity-100 inline-block`} src="frame.png" />`
    </div>)
}