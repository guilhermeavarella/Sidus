import { useState } from "react"
import HomeButton from "../components/HomeButton.jsx"
import supportData from "../data/support.json"
import FAQuestion from "../components/FAQuestion.jsx"

function Support() {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <main className="w-full flex flex-col items-center justify-start gap-4">
            <section className="w-full h-16 flex items-center justify-start">
                <HomeButton />
            </section>

            <section className="w-full flex items-center justify-between my-4">
                <div>
                    <h1>Support</h1>
                    <p className="text-[var(--content-secondary)]">Get help with any questions or issues you may have.</p>
                </div>
            </section>

            <section className="w-full flex items-center justify-start my-8">
                <input 
                type="text" 
                placeholder="Search for questions..." 
                className="w-full bg-[var(--background-secondary)] border border-[var(--content-secondary)] py-3 px-4 rounded-full focus:outline-none" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} />
            </section>

            <section className="w-full flex flex-col items-start justify-start gap-4 mb-64">
                {supportData.questions.filter((item) => item.question.includes(searchTerm) || item.answer.includes(searchTerm)).map((item, index) => (
                    <FAQuestion key={index} item={item} />
                ))}
            </section>
        </main>
    )
}

export default Support