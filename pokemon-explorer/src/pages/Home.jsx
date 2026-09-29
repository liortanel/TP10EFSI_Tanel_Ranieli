import { useState, useEffect } from 'react';
import { fetchPokemons } from '../services/api';
import SearchBar from '../components/SearchBar';
import PokemonList from '../components/PokemonList';

const Home = ({ favorites, onToggleFavorite }) => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchPokemons(150);
        setPokemons(data);
      } catch (err) {
        setError('No fue posible obtener la información.');
      } finally {
        setLoading(false);
      }
    };

    loadPokemons();
  }, []);

  // Filtro por nombre usando .filter()
  const filtered = pokemons.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <SearchBar value={search} onChange={setSearch} />

      {loading && <p style={{ textAlign: 'center', padding: '2rem' }}>Cargando información...</p>}
      {error && <p style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <PokemonList
          pokemons={filtered}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </main>
  );
};

export default Home;
