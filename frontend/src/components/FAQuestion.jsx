import { useState } from "react";

function FAQuestion({ item }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full py-6 border-b border-[var(--content-secondary)] cursor-pointer" onClick={() => setOpen(!open)}>
            <div className="w-full flex items-center justify-between text-left">
                <h5 className="text-lg font-semibold">{item.question}</h5>
                <img className={`h-6 rotate-90 ${open ? "-scale-100" : ""}`} src="/icons/arrow-center.svg" alt={open ? "-" : "+"} />
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ${
                    open ? "max-h-40 mt-2" : "max-h-0"
                }`}
            >
                <p className="text-[var(--content-secondary)]">
                    {item.answer}
                </p>
            </div>
        </div>
    );
}

export default FAQuestion