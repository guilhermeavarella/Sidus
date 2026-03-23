import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ActionButton from "../components/ActionButton"
import LongButton from "../components/LongButton"
import { currencies, convertCurrency } from "../services/freecurrency"


function Home() {
    const navigate = useNavigate()
    const [isHidden, setIsHidden] = useState(false)
    const [balance, setBalance] = useState(0)
    const [exchangeRate, setExchangeRate] = useState()
    const [value1, setValue1] = useState()
    const [value2, setValue2] = useState()
    const [currency1, setCurrency1] = useState("USD")
    const [currency2, setCurrency2] = useState("BRL")

    async function handleChange1(e) {
        const value = Number(e.target.value)
        if (!(value)) return
        setValue1(value)
        setValue2(value * exchangeRate)
    }

    async function handleChange2(e) {
        const value = Number(e.target.value)
        if (!(value)) return
        setValue2(value)
        setValue1(value / exchangeRate)
    }

    async function handleCurrencyChange1(e) {
        const value = e.target.value
        setCurrency1(value)
        setValue2(await convertCurrency(value1, value, currency2))
    }

    async function handleCurrencyChange2(e) {
        const value = e.target.value
        setCurrency2(value)
        setValue1(await convertCurrency(value2, value, currency1))
    }

    /*
    const fetchData = async () => {
        try {
            const response = await fetch("/api/total_balance")
            const data = await response.json()
            setBalance(data.balance)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }*/

    // mocked up version
    const fetchData = () => {
        const response = fetch("/src/mocks/balance.json")
        response.then(res => res.json())
        .then( data => {
            setBalance(data.totalBalance)
        })
        .catch(error => console.error("Error fetching data:", error))
    }

    useEffect(() => {
        async function init() {
            const rate = await convertCurrency(1, currency1, currency2)
            setExchangeRate(rate)
            fetchData()
        }

        init()
    }, [currency1, currency2])

    return (
        <main className="w-full flex flex-col items-center justify-start gap-4">
            <section className="w-full h-16 flex items-center justify-between">
                <button onClick={() => navigate("/app/account")}>
                    <img src="/icons/account.svg" alt="account" className="w-10 hover:cursor-pointer" />
                </button>
                <img src="/logos/primary-icon.svg" alt="logo" className="w-10 hover:cursor-pointer" />
                <button onClick={() => setIsHidden(!isHidden)}>
                    { isHidden ? 
                    <img src="/icons/values-show.svg" alt="toggle" className="w-10 hover:cursor-pointer" /> 
                    :
                    <img src="/icons/values-hide.svg" alt="toggle" className="w-10 hover:cursor-pointer" />
                    }
                </button>
            </section>

            <section className="w-full flex items-center justify-between my-4">
                <div className="flex flex-col items-start justify-center gap-2">
                    <p>Total balance</p>
                    <div className="flex items-center justify-center gap-2">
                        <p className="text-2xl font-bold">$</p>
                        <h1>{ isHidden ? " - - - -" : `${balance.toFixed(2)}` }</h1>    
                    </div>
                </div>

                <button onClick={() => navigate("/app/wallet")}>
                    <img src="/icons/arrow-center.svg" alt=">" className="w-10 hover:cursor-pointer" />
                </button>
            </section>

            <section className="w-full flex items-center justify-start overflow-visible">
                <div className="flex flex-row items-center justify-start gap-2 pl-4 pr-12 overflow-x-scroll -mx-4 scroll-pl-4 snap-x no-scrollbar">
                    <ActionButton variant="primary" label={
                        <div className="flex items-center justify-center gap-2"> 
                            <img src="/icons/arrow-send.svg" alt="Send" className="w-5 mb-1" /> 
                            <p className="mr-1">Send</p>
                        </div> 
                    } />
                    <ActionButton variant="secondary" label={
                        <div className="flex items-center justify-center gap-2"> 
                            <img src="/icons/arrow-receive.svg" alt="Receive" className="w-5 mb-1" /> 
                            <p className="mr-1">Receive</p>
                        </div> 
                    } />
                    <ActionButton variant="secondary" label="Favorites" />
                    <ActionButton variant="secondary" label="Schedule" />
                    <ActionButton variant="secondary" label="Payments" />
                </div>
            </section>

            <section className="w-full flex my-12 mb-56">
                <div className="flex flex-col items-start gap-16">
                    <h2 className="indent-8 text-[var(--content-secondary)]">Reach anywhere <br/>in seconds.</h2>
                    <h2 className="text-end text-[var(--brand-secondary)]">Make it <b>global </b><br/>your way</h2>
                </div>
                <img src="/images/aroundtheworld.png" alt="world" className="w-104 absolute -right-40 -mt-4 select-none" />
            </section>

            <section className="w-full flex flex-col items-center justify-start gap-6 pb-64">
                <div className="w-full flex flex-col items-center justify-between bg-[var(--background-secondary)] rounded-3xl p-8 gap-6">
                    <p className="w-full text-start font-semibold">1 {currency1} = {exchangeRate?.toFixed(2)} {currency2}</p>
                    <div className="w-full flex flex-col items-center justify-center gap-2">
                        <div className="w-full flex items-center justify-between bg-[var(--background-primary)] rounded-2xl p-4 gap-4">
                            <input value={value1?.toFixed(2)} onChange={handleChange1} type="text" placeholder="1.00" className="w-full text-xl font-semibold focus:outline-none" />
                            <select value={currency1} onChange={handleCurrencyChange1} className="text-lg font-medium text-[var(--brand-secondary)] focus:outline-none">
                                { Object.keys(currencies).map((currency) => (
                                    <option key={currency} value={currency}>{currency}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full flex items-center justify-between bg-[var(--background-primary)] rounded-2xl p-4 gap-4">
                            <input value={value2?.toFixed(2)} onChange={handleChange2} type="text" placeholder={exchangeRate?.toFixed(2)} className="w-full text-xl font-semibold focus:outline-none" />
                            <select value={currency2} onChange={handleCurrencyChange2} className="text-lg font-medium text-[var(--brand-secondary)] focus:outline-none">
                                { Object.keys(currencies).map((currency) => (
                                    <option key={currency} value={currency}>{currency}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex gap-1" >
                            <p className="font-semibold">Including fees</p>
                            <button onClick={() => navigate("")}>
                                <img src="/icons/moreinfo.svg" alt=">" className="w-6 hover:cursor-pointer" />
                            </button>
                        </div>
                        <p placeholder="Calculating fees...">
                            {(exchangeRate && value2)? (value2 * 0.01).toFixed(2) + " " + currency2 : exchangeRate && (exchangeRate * 0.01).toFixed(2) + " " + currency2}
                        </p>
                    </div>
                    <LongButton variant="primary" label="Send" />
                </div>
                
                <a href="">Get notified about exchange rates</a>
            </section>
            
        </main>
    )
}

export default Home;