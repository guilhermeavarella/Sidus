import isSmallScreen from "../utils/isSmallScreen.jsx"
import iconVoid from "/icons/app-void.svg"
import icon from "/icons/app.svg"

export default function AppIcon({ isActive = true, action, isLoaded = false }) {
    if (!isActive) 
        return(
            <button 
            className={`flex flex-col items-center justify-center transition-all duration-8000 delay-1000 ${
                !isLoaded ? "blur-xs opacity-95" : "blur-md opacity-40"
            }`}
            >
                <img src={iconVoid} alt="App" className="w-[6rem]" />
                <p>Other</p>
            </button>
    )

    if (!isSmallScreen())
        return (
            <div className={`flex flex-col items-center justify-center transition-all duration-900 delay-450 ${
                !isLoaded ? "blur-md" : "blur-none"
            }`}
            >
                <button 
                className="flex flex-col items-center justify-center drop-shadow-sm duration-500 ease-out hover:scale-115 active:scale-95 transition-all hover:cursor-pointer" 
                onClick={action}
                >
                    <img src={icon} alt="App" className="w-[8rem]" />
                    <p className="text-xl">Sidus</p>
                </button>
            </div>
        )

    return (
        <button 
        className="flex flex-col items-center justify-center drop-shadow-sm duration-500 ease-out hover:scale-110 active:scale-95 transition-all hover:cursor-pointer" 
        onClick={action}
        >
            <img src={icon} alt="App" className="w-[6rem]" />
            <p>Sidus</p>
        </button>
    )
}