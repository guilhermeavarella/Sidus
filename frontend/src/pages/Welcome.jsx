import { useNavigate } from "react-router-dom"
import Button from "../components/LongButton"

function Welcome() {
    const navigate = useNavigate();

    return (
        <main className="w-full h-full flex flex-col items-center justify-start gap-4 p-4 pb-16">
            <section className="w-full h-16 flex items-center justify-start">
                <img src="/logos/primary-full.svg" alt="logo" className="h-10" />
            </section>
            <section className="w-full h-full flex flex-col items-start justify-between mt-3">
                <h2>
                    A smarter way to move your money <b>globally</b>. <br/>
                    Reach anywhere, in seconds.
                </h2>

                <img src="/images/aroundtheworld.png" alt="world" className="w-100% relative right-24" />

                <div className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-3">
                        <Button variant="primary" label="Login" action={() => navigate("/login")} />
                        <Button variant="secondary" label="Register" action={() => navigate("/register")} />
                    </div>
                    <a href="">
                        I need help
                    </a>
                </div>
            </section>
        </main>
    )
}

export default Welcome;