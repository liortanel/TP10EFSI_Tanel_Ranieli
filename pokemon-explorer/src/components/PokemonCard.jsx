import './PokemonCard.css';

const typeColors = {
  fire: '#F08030', water: '#6890F0', grass: '#78C850', electric: '#F8D030',
  psychic: '#F85888', ice: '#98D8D8', dragon: '#7038F8', dark: '#705848',
  fairy: '#EE99AC', normal: '#A8A878', fighting: '#C03028', flying: '#A890F0',
  poison: '#A040A0', ground: '#E0C068', rock: '#B8A038', bug: '#A8B820',
  ghost: '#705898', steel: '#B8B8D0',
};

const PokemonCard = ({ pokemon, isFavorite, onToggleFavorite }) => {
  const { id, name, image, types, weight, height } = pokemon;

  return (
    <div className="pokemon-card">
      <span className="pokemon-card__id">#{String(id).padStart(3, '0')}</span>
      <img
        className="pokemon-card__img"
        src={image}
        alt={name}
        loading="lazy"
      />
      <h3 className="pokemon-card__name">{name}</h3>
      <div className="pokemon-card__types">
        {types.map((type) => (
          <span
            key={type}
            className="pokemon-card__type"
            style={{ backgroundColor: typeColors[type] || '#777' }}
          >
            {type}
          </span>
        ))}
      </div>
      <div className="pokemon-card__stats">
        <span>Peso: {weight / 10} kg</span>
        <span>Altura: {height / 10} m</span>
      </div>
      <button
        className={`pokemon-card__btn ${isFavorite ? 'pokemon-card__btn--fav' : ''}`}
        onClick={() => onToggleFavorite(pokemon)}
        aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      >
        {isFavorite ? '★ Quitar favorito' : '☆ Agregar favorito'}
      </button>
    </div>
  );
};

export default PokemonCard;
