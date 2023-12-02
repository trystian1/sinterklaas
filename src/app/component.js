'use client';

import { useEffect } from "react";
import { useContinueHook } from './continue-hook';

export default function Component() {
    useContinueHook('step-0', 'stap-1');

    return (<div className="" style={{ left: '20%', top: '20%'}}>
       
    </div>)
}