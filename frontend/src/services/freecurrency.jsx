import Freecurrencyapi from '@everapi/freecurrencyapi-js'

const key = import.meta.env.VITE_FREECURRENCY_API_KEY
const freecurrencyapi = new Freecurrencyapi(key)

async function convertCurrency(amount, baseCurrency, destinyCurrency) {
    const response = await freecurrencyapi.latest({
        base_currency: baseCurrency,
        currencies: destinyCurrency
    })

    return response.data[destinyCurrency] * amount
}

const currencies = {
    "BRL": "Brazilian Real",
    "USD": "US Dollar",
    "EUR": "Euro",
    "JPY": "Japanese Yen",
    "BGN": "Bulgarian Lev",
    "CZK": "Czech Republic Koruna",
    "DKK": "Danish Krone",
    "GBP": "British Pound Sterling",
    "HUF": "Hungarian Forint",
    "PLN": "Polish Zloty",
    "RON": "Romanian Leu",
    "SEK": "Swedish Krona",
    "CHF": "Swiss Franc",
    "ISK": "Icelandic Króna",
    "NOK": "Norwegian Krone",
    "HRK": "Croatian Kuna",
    "RUB": "Russian Ruble",
    "TRY": "Turkish Lira",
    "AUD": "Australian Dollar",
    "CAD": "Canadian Dollar",
    "CNY": "Chinese Yuan",
    "HKD": "Hong Kong Dollar",
    "IDR": "Indonesian Rupiah",
    "ILS": "Israeli New Sheqel",
    "INR": "Indian Rupee",
    "KRW": "South Korean Won",
    "MXN": "Mexican Peso",
    "MYR": "Malaysian Ringgit",
    "NZD": "New Zealand Dollar",
    "PHP": "Philippine Peso",
    "SGD": "Singapore Dollar",
    "THB": "Thai Baht",
    "ZAR": "South African Rand"
}

export { convertCurrency, currencies }