function LongButton({ variant = "primary", label, action }) {
    if (variant === "primary")
        return (
            <button 
            onClick={action} 
            className="w-full px-9 py-3 bg-[var(--background-inverse)] text-[var(--content-inverse)] font-bold rounded-xl hover:cursor-pointer">
                {label}
            </button>
        )

    else if (variant === "secondary")
        return (
            <button 
            onClick={action} 
            className="w-full px-9 py-3 bg-[var(--background-primary)] text-[var(--content-primary)] font-bold rounded-xl border-2 hover:cursor-pointer">
                {label}
            </button>
        )
    
}

export default LongButton