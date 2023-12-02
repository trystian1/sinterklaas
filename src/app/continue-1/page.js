import ContinueComponent from "../components/continue-component";

export default function Page() {

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h2 className="mb-2">Deel 1:</h2>
            <h2>Heb geduld Marieke tot de volledige text is verschenen druk dan pas op doorgaan!</h2>
            <h2 className="mb-2">Lees het gedicht voor aan de mensen in de zaal!</h2>
            <ContinueComponent step={'step-1'} next={'/continue-2'}/>
        </main>
    )
}