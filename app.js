
async function initialLoad() {
    const breedSelect = document.getElementById('breedSelect');
    const url = 'https://api.thecatapi.com/v1/breeds';

    try {
        // Fetch data from the API
        const response = await fetch(url);
        const breeds = await response.json();

        // Iterate through the breeds and create options
        breeds.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed.id;
            option.textContent = breed.name;
            breedSelect.appendChild(option);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
