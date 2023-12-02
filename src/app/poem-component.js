'use client';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react"
export const Poem = ({text, callBack}) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if (currentIndex < text.length) {
          const timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
          }, 50);
      
          return () => clearTimeout(timeout);
        } else {
            callBack()
        }
      }, [currentIndex, 50, text]);;

    return (<>
        <h2 className={`text-2xl font-semibold animate-[wiggle_1s_ease-in-out_infinite]`}>
            <p style={{whiteSpace: 'pre-line'}}>
            {currentText}
            </p>
            
        </h2>
    </>)
}