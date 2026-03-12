function ActionButton({ variant, action, label }) {
    if (variant === 'primary') {
        return (
            <button className="h-12 px-8 bg-[var(--brand-secondary)] text-[var(--content-inverse)] font-semibold rounded-full gap-2 hover:cursor-pointer snap-start"> 
                {label}
            </button>
        );
    }

    return (
        <button className="h-12 px-8 bg-[var(--background-secondary)] text-[var(--content-primary)] font-semibold rounded-full gap-2 hover:cursor-pointer snap-start"> 
            {label}
        </button>
    );
}

export default ActionButton