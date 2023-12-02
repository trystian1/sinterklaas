"use client"

import { useContinueHook } from "../continue-hook";
import { Poem } from "../poem-component"
const text = `
Wat is dit nou, er zit ook nog aan hangslot aan het blik
Laat nooit de kans gaan om te rijmen op het woord pik
Wat puberaal allemaal en dat op een zondag
Laten we de dag dan maar eindigen met een lach
Wil je weten waar de laatste sleutel hangt 
Dan moet je zoeken waar Trystian het meest naar verlangt
De Sint hoort dat Trystian snel weer kan lopen
Dan heb jij weer tijd voor je hobbies mag je hopen
Zoals lekker op zondagochtend de tuin bijhouden
Of lekker een boek lezen zoals je deed voordat jullie trouwden
Nou dit gezeik duurt alweer veel te lang
De Sint is het zat en krijgt er een hangzak van, ben ik bang
Daarom heeft de Sint onze nieuwe premier ingeschakeld
Ik hoop daarom dat onze nieuwe leider jouw even belt.
De Sint is blij dat hij weer op sodemietert naar Spanje
Marieke doe alsjeblieft een keer rustig aan met de Champagne

`

export const ContentComponent = () => {   
   useContinueHook('step-8', 'stap-9'); 
    return (<>
      <Poem text={text} callBack={() => null}/>
    </>
    )
}