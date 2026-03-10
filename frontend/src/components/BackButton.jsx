import { useNavigate } from "react-router-dom"

function BackButton() {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)}>
            <img src="/icons/arrow-back.svg" alt="logo" className="h-10 hover:cursor-pointer" />
        </button>
    )
}

export default BackButton;