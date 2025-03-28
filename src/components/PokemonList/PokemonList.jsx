

const PokemonList = () => {
    return(
        <>
        <h2>Pokemon</h2>
        <ul>
            {prototypejs.pokemon.map((currentPokemon) =>(
                <li key={currentPokemon.name}>
                    {currentPokemon.name}
                </li>
            ) )}
        </ul>
        </>
    )
}

export default PokemonList