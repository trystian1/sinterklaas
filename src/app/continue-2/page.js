import ContinueComponent from "../components/continue-component";

export default function Page() {
    
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h2>Deel 2</h2>
            <h2>Ook hier wachten we even met klikken!</h2>
            <ContinueComponent step={'step-2'} next={'/answers-stap-3'}/>
        </main>
    )
}