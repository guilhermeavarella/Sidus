import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { isLoggedIn } from "../utils/authentication"

import logo from "/logos/white-global.svg"

function InitialLoad() {
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (isLoggedIn())
                navigate("/home")
            else
                navigate("/welcome")
        }, 5000)

    }, []);

    return (
        <main 
        className={`w-full h-full flex flex-col items-center justify-center pb-16 bg-[var(--background-primary)]
        transition-all duration-1000 delay-500 ${
            !isLoaded ? "blur-xs opacity-0" : "blur-none opacity-100"
        }`}
        >
            <img src={logo} alt="Sidus global" className="w-[12rem]" />
        </main>
    )
}

export default InitialLoad;