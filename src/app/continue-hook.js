import { useEffect } from "react";

export const useContinueHook = (previousStep, nextStep) => {
    useEffect(() => {
        const getIfContinue = async () => {
            setTimeout(async () => {
                const response = await fetch(`https://whattoeat-cc0b1.ew.r.appspot.com/get-continue-state?step=${previousStep}`, { mode: 'no-cors' })
                const data = await response.json();
                if (data.continue) {
                    window.location = '/' + nextStep
                } else {
                    getIfContinue();
                }
            }, 1500);
        }
         getIfContinue();
    }, [])
}

