async function getDog() {
    const dogName = document.getElementById('dog-name').value.toLowerCase();
    const url = `https://api.thedogapi.com/v1/breeds`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Raza no encontrada');

        const breeds = await response.json();
        const breed = breeds.find(b => b.name.toLowerCase().includes(dogName));

        if (!breed) throw new Error('No se encontró la raza');

        // Obtener una imagen aleatoria de la raza
        const imageResponse = await fetch(`https://api.thedogapi.com/v1/images/search?breed_id=${breed.id}`);
        const imageData = await imageResponse.json();

        document.getElementById('dog-info').innerHTML = `
            <h2>${breed.name}</h2>
            <p>🐕 Temperamento: ${breed.temperament}</p>
            <p>📏 Tamaño: ${breed.height.metric} cm</p>
            <p>⚖️ Peso: ${breed.weight.metric} kg</p>
            <img src="${imageData[0]?.url}" alt="${breed.name}">
        `;
    } catch (error) {
        document.getElementById('dog-info').innerText = 'Error: Raza no encontrada';
        console.error(error);
    }
}
