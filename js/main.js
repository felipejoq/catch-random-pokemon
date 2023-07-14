const btnGetRandom = document.getElementById('btnRandomPokemon');
const coverImg = document.getElementById('cover-img');
const pokemonName = document.getElementById('pokemon-name');
const rootUrl = 'https://pokeapi.co/api/v2/pokemon/';
const max = 500;
const min = 1;

const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

const getData = async () => {
    const url = rootUrl + getRandomNumber(min, max);
    return await (await fetch(url)).json();
}

btnGetRandom.addEventListener('click', async () => {
    const data = await getData();
    if (data) {
        pokemonName.innerText = data.name;
        coverImg.src = data.sprites.other.dream_world.front_default;
    }
})