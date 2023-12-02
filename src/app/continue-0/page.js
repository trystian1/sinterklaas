import ContinueComponent from "../components/continue-component";

export default function Page() {

    return (
        <main className="flex min-h-screen flex-col items-center p-8">
            <h2 className="text-3xl font-semibold animate-[wiggle_1s_ease-in-out_infinite]">Het begin</h2>
            
            <h2 className="text-1xl font-semibold animate-[wiggle_1s_ease-in-out_infinite]">Doorgaan knop zorgt ervoor dat je gaat beginnen,zorg dat je op elke stap de volledige pagina in je opneemt en alles leest.
            Er is geen weg meer terug. Anders moet je de hulp vragen bij de held die dit gemaakt heeft. </h2>
            <ContinueComponent step={'step-0'} next={'/continue-1'}/>
        </main>
    )
}