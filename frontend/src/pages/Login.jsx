import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLogin, isLoggedIn } from "../utils/authentication"
import Button from "../components/LongButton"
import BackButton from "../components/BackButton";


function Login() {
    const navigate = useNavigate();
    const { login: handleLogin, error } = useLogin();
    
    const handleSubmit = async (e) => {
        if (e) e.preventDefault()

        const form = document.getElementById("loginForm")
        const formData = new FormData(form)
        const username = formData.get("username")
        const password = formData.get("password")

        const valid = await handleLogin(username, password)

        if (valid) navigate("/home")
    };

    return (
        <main className="w-full h-full flex flex-col items-center justify-start gap-4 p-4 pb-16">
            <section className="w-full h-16 flex items-center justify-start">
                <BackButton/>
            </section>

            <section className="w-full h-full flex flex-col items-start justify-between">
                <div className="w-full flex flex-col gap-4">
                    <div>
                        <h1>Connect your account</h1>
                        <p className="text-[var(--content-secondary)]">Welcome back! Sign in to reach anywhere in seconds.</p>
                    </div>

                    <form id="loginForm" name="loginForm" className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
                        <input type="text" name="username" placeholder="Enter your username" className="p-4 border-2 rounded-xl" />
                        <input type="password" name="password" placeholder="Enter your password" className="p-4 border-2 rounded-xl" />
                    </form>
                </div>

                <div className="w-full flex flex-col gap-4">
                    <Button variant="primary" label="Login" action={handleSubmit} />
                    <a href="">
                        Forgot your password?
                    </a>
                </div>
            </section>
        </main>
    )
}

export default Login;