import { useNavigate } from "react-router-dom"
import isSmallScreen from "./utils/isSmallScreen"
import { enterFullscreen } from "./utils/fullscreen"

function Intro() {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Silly intro</h1>

        <button 
        className="p-3 bg-blue-500 rounded hover:bg-blue-600" 
        onClick={() => {
            if (isSmallScreen()) enterFullscreen()
            navigate("/home")
        }}
        >
            App
        </button>
    </div>
  )
}

export default Intro