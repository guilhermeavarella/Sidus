import HomeButton from "../components/HomeButton.jsx"
import servicesData from "../data/services.json"

function Services() {
    return (
        <main className="w-full flex flex-col items-center justify-start gap-4">
            <section className="w-full h-16 flex items-center justify-start">
                <HomeButton />
            </section>

            <section className="w-full flex items-center justify-between my-4">
                <div>
                    <h1>Sidus Services</h1>
                    <p className="text-[var(--content-secondary)]">Explore everything Sidus offers, from global finance to everyday features and services.</p>
                </div>
            </section>

            <section className="w-full flex items-center justify-start overflow-visible">
                <div className="flex flex-row items-center justify-start gap-4 pl-4 pr-12 overflow-x-scroll -mx-4 scroll-pl-4 snap-x no-scrollbar">
                    {servicesData.highlights.map((highlight, index) => (
                        <div key={index} className="min-h-112 max-h-112 min-w-112 max-w-112 flex flex-col justify-between bg-[var(--background-secondary)] p-6 rounded-3xl snap-start">
                            <div className="flex flex-col items-start gap-3">
                                <img src={"/images/" + highlight.image} alt={highlight.name} className="h-42" />
                                <h5 className="text-xl font-medium max-w-48">{highlight.name}</h5>
                                <p className="text-[var(--content-secondary)]">{highlight.description}</p>
                            </div>
                            <button className="w-fit py-3 px-6 rounded-xl border border-[var(--brand-secondary)] text-[var(--brand-secondary)] font-semibold cursor-pointer">
                                <p>Get global now</p>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full flex flex-col items-start justify-start gap-4 mt-4 mb-64 overflow-visible">
                {servicesData.categories.map((category, index) => (
                    <section className="w-full flex flex-col items-start justify-start mt-12 overflow-visible" key={index}>
                        <h4 key={index} className="text-xl font-bold mb-4">{category}</h4>
                        <div className="flex flex-row items-center justify-start gap-4 pl-4 pr-12 overflow-x-scroll -mx-4 scroll-pl-4 snap-x no-scrollbar">
                            {servicesData[category].map((service, index) => (
                                <div key={index} className="min-h-84 max-h-84 min-w-72 max-w-72 flex flex-col justify-between bg-[var(--background-secondary)] p-6 rounded-3xl snap-start">
                                    <div className="flex flex-col items-start gap-1">
                                        <img src={"/icons/services/" + service.icon} alt={service.name} className="h-10 mb-2" />
                                        <h5 className="text-lg font-medium">{service.name}</h5>
                                        <p className="text-sm text-[var(--content-secondary)]">{service.description}</p>
                                    </div>
                                    <button className="w-fit text-[var(--brand-secondary)] font-semibold cursor-pointer">
                                        <p>Get global now</p>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </section>
        </main>
    )
}

export default Services