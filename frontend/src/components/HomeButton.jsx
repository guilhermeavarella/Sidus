import { useNavigate } from "react-router-dom"

function HomeButton() {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate("/app/home")}>
            <img src="/icons/back-home.svg" alt="home" className="h-10 hover:cursor-pointer" />
        </button>
    )
}

export default HomeButton