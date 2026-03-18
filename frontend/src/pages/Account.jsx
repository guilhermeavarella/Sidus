import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { logout } from "../utils/authentication"
import BackButton from "../components/BackButton"

function Account() {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [notifications, setNotifications] = useState([])
    const [hasUnread, setHasUnread] = useState(false)
    const [latestMessage, setLatestMessage] = useState("")
    
    /*
    const fetchData = async () => {
        const token = localStorage.getItem("token")
        if (!token) return

        try {
            const response = await fetch("/api/user", {
                headers: {
                    "Auth": `${token}`
                }
            })
            const data = await response.json()
            setFirstName(data.firstName)
            setLastName(data.lastName)
        } catch (error) {
            console.error("Error fetching data:", error)
        }

        try {
            const response = await fetch("/api/notifications", {
                headers: {
                    "Auth": `${token}`
                }
            })
            const data = await response.json()
            setNotifications(data.notifications)
        } catch (error) {
            console.error("Error fetching notifications:", error)
        }
    }*/
    
    // mocked up version
    const fetchData = () => {

        const userData = fetch("/src/mocks/user.json")
        userData.then(res => res.json())
        .then( data => {
            setFirstName(data.firstName),
            setLastName(data.lastName)
        })

        const userNotifications = fetch("/src/mocks/notifications.json")
        userNotifications.then(res => res.json())
        .then( data => {
            setNotifications(data.notifications)
            setHasUnread(data.hasUnread)
            const latest = data.latest - 1
            setLatestMessage(data.notifications[latest].message)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main className="w-full flex flex-col items-center justify-start pb-48 gap-4">
            <section className="w-full h-16 flex items-center justify-start">
                <BackButton />
            </section>

            <section className="w-full flex flex-col items-center justify-start gap-8">
                <div className="w-full flex flex-col items-center justify-center gap-2">
                    <img src="/icons/img-avatar.svg" alt="account" className="w-24" />
                        <h4 className="text-xl text-center font-medium">{firstName}<br/>{lastName}</h4>
                </div>

                <div className="w-full flex items-center justify-start gap-4">
                    {hasUnread? <img src="/icons/notifications-active.svg" alt="email" className="w-10" /> : <img src="/icons/notifications.svg" alt="email" className="w-10" />}
                    <div className="h-10 flex-1 min-w-0 flex items-center bg-[var(--background-secondary)] rounded-full px-6">
                        <p className="truncate w-full">{latestMessage}</p>
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col items-center justify-start my-16 gap-4">
                <section className="w-full flex flex-col items-center justify-start">
                    <div className="w-full flex items-center justify-start gap-2">
                        <img src="/icons/settings-settings.svg" alt="settings" className="w-8" />
                        <hr className="w-full border-[var(--content-secondary)]" />
                    </div>
                    <div className="w-full flex flex-col items-center justify-start p-3 pt-1">
                        <button className="w-full p-1 hover:cursor-pointer" onClick={() => { navigate("")}}>
                            <p className="text-start text-lg font-semibold">General settings</p>
                        </button>
                    </div>
                </section>

                <section className="w-full flex flex-col items-center justify-start">
                    <div className="w-full flex items-center justify-start gap-2">
                        <img src="/icons/settings-security.svg" alt="security" className="w-8" />
                        <hr className="w-full border-[var(--content-secondary)]" />
                    </div>
                    <div className="w-full flex flex-col items-center justify-start p-3 pt-1">
                        <button className="w-full p-1 hover:cursor-pointer" onClick={() => { navigate("")}}>
                            <p className="text-start text-lg font-semibold">Safe Token</p>
                        </button>
                        <button className="w-full p-1 hover:cursor-pointer" onClick={() => { navigate("")}}>
                            <p className="text-start text-lg font-semibold">Personal information</p>
                        </button>
                        <button className="w-full p-1 hover:cursor-pointer" onClick={() => { navigate("")}}>
                            <p className="text-start text-lg font-semibold">Update password</p>
                        </button>
                    </div>
                </section>

                <section className="w-full flex flex-col items-center justify-start">
                    <div className="w-full flex items-center justify-start gap-2">
                        <img src="/icons/settings-info.svg" alt="info" className="w-8" />
                        <hr className="w-full border-[var(--content-secondary)]" />
                    </div>
                    <div className="w-full flex flex-col items-center justify-start p-3 pt-1">
                        <button className="w-full p-1 hover:cursor-pointer" onClick={() => { navigate("")}}>
                            <p className="text-start text-lg font-semibold">Terms of Service</p>
                        </button>
                        <button className="w-full p-1 hover:cursor-pointer" onClick={() => { navigate("")}}>
                            <p className="text-start text-lg font-semibold">About Sidus</p>
                        </button>
                        <button className="w-full p-1 hover:cursor-pointer" onClick={() => { navigate("")}}>
                            <p className="text-start text-lg font-semibold">Rate this App</p>
                        </button>
                    </div>
                </section>

                <button className="w-full border border-[var(--alert-red)] rounded-xl p-3 hover:cursor-pointer" 
                onClick={() => { logout(); navigate("/welcome") }}>
                    <p className="text-start text-lg text-[var(--alert-red)] font-semibold">Log out</p>
                </button>
            </section>
        </main>
    )
}

export default Account