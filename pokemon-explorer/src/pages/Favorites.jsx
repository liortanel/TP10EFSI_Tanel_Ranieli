import PokemonList from '../components/PokemonList';

const Favorites = ({ favorites, onToggleFavorite }) => (
  <main>
    <h2 style={{ textAlign: 'center', padding: '1.5rem 0 0', margin: 0 }}>
      ★ Mis Favoritos
    </h2>

    {favorites.length === 0 ? (
      <p style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
        Todavía no agregaste favoritos.
      </p>
    ) : (
      <PokemonList
        pokemons={favorites}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    )}
  </main>
);

export default Favorites;
