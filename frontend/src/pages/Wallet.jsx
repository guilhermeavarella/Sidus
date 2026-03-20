import { useState, useEffect } from "react"
import HomeButton from "../components/HomeButton"
import ActionButton from "../components/ActionButton"
import { currencies } from "../services/freecurrency"

function Wallet() {
    const [isHidden, setIsHidden] = useState(false)
    const [selectedCurrency, setSelectedCurrency] = useState('BRL')
    const [selectedBalance, setSelectedBalance] = useState(0)
    const [balances, setBalances] = useState([])
    const [transactions, setTransactions] = useState([])

    /*
    const fetchData = async () => {
        const balance = await fetch("/api/balance")
        const balanceData = await balance.json()
        setBalances(balanceData.balances)
        setSelectedBalance(balanceData.balances.find(b => b.currency === selectedCurrency).balance)

        const transactions = await fetch("/api/transactions")
        const transactionsData = await transactions.json()
        setTransactions(transactionsData.transactions)
    }
    */

    // mocked up version
    const fetchData = () => {
        const balance = fetch("/src/mocks/balance.json")
        balance.then(res => res.json())
        .then( data => {
            setBalances(data.balances)
            setSelectedBalance(data.balances.find(b => b.currency === selectedCurrency).balance)
        })

        const transactions = fetch("/src/mocks/transactions.json")
        transactions.then(res => res.json())
        .then( data => {
            setTransactions(data.transactions)
        })
    }

    useEffect(() => {
        fetchData()
     }, [])

    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency)

        const newBalance = balances.find(b => b.currency === currency)?.balance || 0
        setSelectedBalance(newBalance)
    }

    return (
        <main className="w-full flex flex-col items-center justify-start gap-4">
            <section className="w-full h-16 flex items-center justify-between">
                <HomeButton />
                <button onClick={() => setIsHidden(!isHidden)}>
                        { isHidden ? 
                        <img src="/icons/values-show.svg" alt="toggle" className="w-10 hover:cursor-pointer" /> 
                        :
                        <img src="/icons/values-hide.svg" alt="toggle" className="w-10 hover:cursor-pointer" />
                        }
                    </button>
            </section>

            <section className="w-full flex items-center justify-between my-4">
                <div>
                    <h1>Wallet</h1>
                    <p className="text-[var(--content-secondary)]">View and manage your balance across currencies, quickly access recent cross-currency transactions.</p>
                </div>
            </section>

            <section className="w-full flex items-center justify-start overflow-visible">
                <div className="flex flex-row items-center justify-start gap-2 pl-4 pr-12 overflow-x-scroll -mx-4 scroll-pl-4 snap-x no-scrollbar">
                    {balances.map((b) => (
                        <ActionButton 
                            key={b.currency} 
                            variant={b.currency === selectedCurrency ? "selected" : "secondary"}
                            label={
                                <div className="flex items-center justify-center gap-2">
                                    {(b.currency === "BRL" || b.currency === "USD") && (
                                        <img
                                            src={`/images/flags/${b.currency}.jpg`}
                                            className="h-5"
                                        />
                                    )}
                                    {b.currency}
                                </div>
                            }
                            action={() => handleCurrencyChange(b.currency)}
                        />
                    ))}
                </div>
            </section>

            <section className="w-full flex flex-col items-start justify-start bg-[var(--background-secondary)] rounded-3xl gap-1 px-6 py-4">
                <p className="text-[var(--brand-secondary)]">
                    {selectedCurrency} balance
                </p>
                <div className="flex items-center justify-center gap-3">
                    <p className="text-2xl font-bold">$</p>
                    <h1>{ isHidden ? " - - - -" : `${selectedBalance.toFixed(2)}` }</h1>    
                </div>
            </section>

            <section className="w-full flex flex-col items-start justify-start gap-4 mt-4 mb-64">
                <section className="w-full flex flex-col items-start justify-start mt-12">
                    <h4 className="text-xl font-bold mb-4">Recent transactions</h4>
                    
                    <div className="w-full flex flex-col gap-3">
                        {transactions.map((t) => (
                            <div className="w-full flex flex-row items-start justify-start bg-[var(--background-secondary)] rounded-3xl gap-4 p-6" index={t.id}>
                                <img src={`/icons/arrow-${t.type}.svg`}/>
                                <div className="w-full flex flex-col items-start justify-start gap-1">
                                    <div className="w-full flex flex-row justify-between">
                                        <h6 className="text-lg font-bold">{t.originCurrency} to {t.destinyCurrency}</h6>
                                        <h6 className="text-lg font-bold">{isHidden? "- - - -" : t.amount}</h6>
                                    </div>
                                    <p className="text-[var(--content-secondary)]">{t.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Wallet