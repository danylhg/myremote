async function getCatFact() {
    const url = 'https://catfact.ninja/fact';

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error al obtener el dato');

        const data = await response.json();
        document.getElementById('cat-fact').innerHTML = `🐱 ${data.fact}`;
    } catch (error) {
        document.getElementById('cat-fact').innerText = 'Error al obtener el dato.';
        console.error(error);
    }
}
