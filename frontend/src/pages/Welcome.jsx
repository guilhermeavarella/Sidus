import { useNavigate } from "react-router-dom"

function Welcome() {
    const navigate = useNavigate();

    return (
        <div>
            <p>Welcome Page</p>
        </div>
    )
}

export default Welcome;