"use client"
import { useEffect, useState } from "react"
import { useContinueHook } from "../continue-hook"
import { Poem } from "../poem-component"
const text = `
De Sint heeft je vriend voor deze geweldige speurttocht gebeld
Wat is hij toch slim en vriendelijk , ja een echte held\n
Zijn schoonouders mogen in hun handjes knijpen
Zo een geweldige jongen ligt niet voor het grijpen	
Dit gedicht ging niet over hem helaas het is  waar
Maar de Sint vind dat jij hem goed hebt verzorgt zonder bezwaar\n
De knieen van die gozer vormen zijn zwakke plek
Daarom wordt jij de afgelopen weken knetter gek
Wat heb jij hard gewerkt de laatste weken
Dit kan de sint met geen kados laten verbleken\n
Ik heb gevraagd aan Piet om een bekendheid vast te leggen op een schilderij
Denk goed na want, je kent deze zeker, het antwoord is erg dichtbij
Op je mobiel, snel, geen tijd te verslaan, 
Vul in en ontdek naar welke stap we gaan.
`
export const ContentComponent = () => {
    const [isImageShowing, setImageShow] = useState(false)
    const [answerGiven, setAnswer] = useState('')
    const [isCorrect, setCorrect] = useState(false)
    useContinueHook('step-4', 'stap-5');

    useEffect(() => {
        console.log('RUN?')
        const getAnswer = async () => {
            setTimeout(async () => {
                const response = await fetch('https://whattoeat-cc0b1.ew.r.appspot.com/anwser-get-4', { mode: 'no-cors' })
                const data = await response.json();
                if (data.correct) {
                    setAnswer(data.answer)
                    setCorrect(true)
                } else {
                    console.log(data);
                    if (data.answer && !data.correct) {
                        setAnswer(data.answer)
                        setCorrect(false)
                    }
                    getAnswer();
                }
            }, 1500);
        }
         getAnswer();
    }, [])
    console.log(answerGiven, isCorrect);
    return (<>
        {answerGiven && !isCorrect && <h2 className={`mb-3 text-2xl font-semibold animate-[wiggle_1s_ease-in-out_infinite]`}>Jammer jo! Je antwoord: {answerGiven} is fout!</h2>}
        {answerGiven && isCorrect && <h2 className={`mb-3 text-2xl font-semibold animate-[wiggle_1s_ease-in-out_infinite]`}>{answerGiven} is goed!!!!!!🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉</h2>}
        <Poem text={text} callBack={() => setImageShow(true)}/>
        <img class={`w-1/5 mt-1 transition-opacity ease-in duration-700  ${isImageShowing ? 'opacity-100' : 'opacity-0 hidden'}`} src="mystery.jpeg" />
    </>
    )
}