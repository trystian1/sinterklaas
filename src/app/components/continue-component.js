'use client';

export default function ContinueComponent({ step, next }) {
    const onClick = () => {
        fetch(`http://localhost:8080/set-continue-state?step=${step}`);
        window.location = next;
    }
    return (
        <button className={`mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-opacity ease-in duration-700 opacity-100`} onClick={() => onClick()}>Doorgaan naar de volgende stap!</button>
    )
}
