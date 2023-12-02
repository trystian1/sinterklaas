"use client"
import { useEffect, useState } from "react"
import { useContinueHook } from "../continue-hook"
import { Poem } from "../poem-component"
const text = `Marieke en zeer knappe vriend Trystian gaan een nieuw huis kopen\nDan kan die vent van je daar de wc vol gaan hopen\nEen ontzettend mooi vooruitzicht in het verschiet\nMaar wie gaat dat paleisje inrichten, vroeg meneer Piet\n\nTrystian mag bij hoge uitzondering wat suggesties voorstellen.\nAnders kan je snel Roos van kopen zonder kijken bellen\nLaten we eens kijken of Marieke dat beter kan\nDe Sint wil wel even weten hoe het zit met je interieur plan\nWat wil je straks boven je bed hebben hangen wil de Sint graag weten\n Een levensgrote foto van je vriend, of iets erotisch van jezelf ? Je laat de Sint zweten.\n\nVul dit in in je tweede scherm, dan zal de Sint een afbeelding maken\nWellicht zit in deze afbeelding een cijfer om de code te kraken!`;
const text2 = `
Marieke en zeer knappe vriend Trystian gaan een nieuw huis kopen 
Dan kan die vent van je daar de wc vol gaan hopen 
Een ontzettend mooi vooruitzicht in het verschiet 
Maar wie gaat dat paleisje inrichten, vroeg meneer Piet\n 
Trystian mag bij hoge uitzondering wat suggesties voorstellen. 
Anders kan je snel Roos van kopen zonder kijken bellen 
Laten we eens kijken of Marieke dat beter kan 
De Sint wil wel even weten hoe het zit met je interieur plan\n
Wat wil je straks boven je bed hebben hangen wil de Sint graag weten 
Een mooi schilderij van een glas wijn ? Of van een bord lekker eten? 
Vul dit in in je tweede scherm, dan zal de Sint een afbeelding maken 
Wellicht zit in deze afbeelding een aanwijzing om de code te kraken!


`    
export const ContentComponent = () => {

    const [imageUrl, setImageUrl] = useState("");
    const [answer, setAnswer] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [hasFetchedImage, setFetchingImage] = useState(false);
    useContinueHook('step-3', 'stap-4');
    useEffect(() => {
        if (!hasFetchedImage && answer) {
            setFetchingImage(true);
            setLoading(true);
            const fetchImage = async () => {
                const response = await fetch(`https://whattoeat-cc0b1.ew.r.appspot.com/image-stap-3?answer=${answer}`)
                const data = await response.json();
                setImageUrl(data.imageUrl);
                setLoading(false);
            }
            console.log('FETCH');
            fetchImage();
        }
     
    }, [hasFetchedImage, answer])



    useEffect(() => {
        console.log('RUN?')
        const getAnswer = async () => {
            setTimeout(async () => {
                const response = await fetch('https://whattoeat-cc0b1.ew.r.appspot.com/anwser-get-3')
                const data = await response.json();
                if (data.answer) {
                    setAnswer(data.answer)
                } else {
                    getAnswer();
                }
            }, 1500);
        }
         getAnswer();
    }, [])


    return (<>
              {isLoading && (
        <>
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          <h2 className="mb-3 text-2xl font-semibold">
            De Sint is even een plaatje aan het maken...... Even geduld, haal even een
            biertje voor Trystian
          </h2>
        </>
      )}
        {answer && <h2 className="mb-3 text-2xl font-semibold">Marieke wilt boven haar bed: {answer}</h2>}
        {imageUrl && <img className="w-2/5 mt-6" src={imageUrl} />}
        <Poem text={text2} callBack={() => null}/>
    
    </>
    )
}