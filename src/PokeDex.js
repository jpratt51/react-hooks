import React from "react";
import useAxios from "./hooks/useAxios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
    const [pokemon, addPokemon] = useAxios(
        `https://pokeapi.co/api/v2/pokemon/${name}/`
    );

    return (
        <div className="PokeDex">
            <div className="PokeDex-buttons">
                <h3>Please select your pokemon:</h3>
                <PokemonSelect add={addPokemon} />
            </div>
            <div className="PokeDex-card-area">
                {pokemon.map((cardData) => (
                    <PokemonCard
                        key={cardData.id}
                        front={cardData.front}
                        back={cardData.back}
                        name={cardData.name}
                        stats={cardData.stats.map((stat) => ({
                            value: stat.value,
                            name: stat.name,
                        }))}
                    />
                ))}
            </div>
        </div>
    );
}

export default PokeDex;
