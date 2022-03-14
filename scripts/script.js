const listPokemonToSelection = document.querySelectorAll(".pokemon");
const cardsPokemon = document.querySelectorAll(".card-pokemon");

listPokemonToSelection.forEach(pokemon => {
    pokemon.addEventListener("click", () => {

        startApp();

        const idSelected = pokemon.attributes.id.value;
        const idCardOpened = idSelected + "-card";

        const cardToOpen = document.getElementById(idCardOpened);
        cardToOpen.classList.add("selected");

        const pokemonSelected = document.getElementById(idSelected);
        pokemonSelected.classList.add("actived");
    });
});

function startApp() {
    removeAllSelected("selected");
    removeAllActived("actived");
}

function removeAllSelected(itemClass) {
    cardsPokemon.forEach(card =>
        card.classList.remove(itemClass)
    );
}

function removeAllActived(itemClass) {
    listPokemonToSelection.forEach(pokemonList =>
        pokemonList.classList.remove(itemClass)
    );
}
