import PokemonCard from './PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemons, favorites, onToggleFavorite }) => {
  if (pokemons.length === 0) {
    return <p className="pokemon-list__empty">No encontramos resultados.</p>;
  }

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          isFavorite={favorites.some((f) => f.id === pokemon.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default PokemonList;
