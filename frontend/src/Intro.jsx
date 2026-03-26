import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import isSmallScreen from "./utils/isSmallScreen"
import { enterFullscreen } from "./utils/fullscreen"

import AppIcon from "./components/AppIcon"

function Intro() {
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);

    const items = Array(16).fill(false);
    items[6] = true;

    const handleClick = async () => {
        if (isSmallScreen()) await enterFullscreen()
        setTimeout(() => {
            navigate("/load")
        }, 1000)
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 10)
    }, [])

    if (!isSmallScreen()) {
        return (
            <AppIcon isActive={true} action={handleClick} isLoaded={isLoaded} />
      )
    }

    return (
        <div className="w-screen grid grid-cols-4 gap-5 items-center justify-center p-9">
            {items.map((item, i) => (
                <AppIcon key={i} isActive={item} action={handleClick} isLoaded={isLoaded} />
            ))}
        </div>
  )
}

export default Intro