async function getExchangeRate() {
    const currency = document.getElementById('currency').value;
    const url = 'https://api.exchangerate-api.com/v4/latest/USD';

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error al obtener la tasa de cambio');

        const data = await response.json();
        const rate = data.rates[currency];

        document.getElementById('exchange-rate').innerHTML = `
            💰 1 USD = ${rate} ${currency}
        `;
    } catch (error) {
        document.getElementById('exchange-rate').innerText = 'Error al obtener datos.';
        console.error(error);
    }
}
