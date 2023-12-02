import { useEffect } from "react";

export const useContinueHook = (previousStep, nextStep) => {
    useEffect(() => {
        const getIfContinue = async () => {
            setTimeout(async () => {
                const response = await fetch(`http://localhost:8080/get-continue-state?step=${previousStep}`)
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

