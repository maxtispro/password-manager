import { useEffect, useState } from "react";
import { Lock } from "./components/Icons";

function App() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("unknown")

    return (
        <>
        <div className="flex flex-row justify-center items-center text-center gap-4">
            <Lock className="h-12 fill-none" alt="Password Manager Logo" />
            <h1>Password Manager</h1>
        </div>
        <div>
            <button
                onClick={() => setCount((count) => count + 1)}
                aria-label='increment'
            >
                count is {count}
            </button>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
        <div>
            <button
                onClick={() => {
                fetch('/api/')
                .then((res) => res.json() as Promise<{ name: string }>)
                .then((data) => setName(data.name))
                }}
                aria-label='get name'
            >
                Name from API is: {name}
            </button>
            <p>
                Edit <code>worker/index.ts</code> to change the name
            </p>
        </div>
        </>
    )
}

export default App
