import { useState, useEffect } from 'react';
import {
  View, TextInput, FlatList, Text, ActivityIndicator, StyleSheet,
} from 'react-native';
import { fetchPokemons } from '../services/api';
import PokemonCard from '../components/PokemonCard';

const HomeScreen = ({ favorites, onToggle }) => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchPokemons(100);
        setPokemons(data);
      } catch {
        setError('No fue posible obtener la información.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // Filtro por nombre
  const filtered = pokemons.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar Pokémon..."
        value={search}
        onChangeText={setSearch}
        accessibilityLabel="Buscar Pokémon"
      />

      {loading && (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#cc0000" />
          <Text style={styles.message}>Cargando información...</Text>
        </View>
      )}

      {error && <Text style={styles.error}>{error}</Text>}

      {!loading && !error && filtered.length === 0 && (
        <Text style={styles.message}>No encontramos resultados.</Text>
      )}

      {!loading && !error && (
        <FlatList
          data={filtered}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          renderItem={({ item }) => (
            <PokemonCard
              pokemon={item}
              isFavorite={favorites.some((f) => f.id === item.id)}
              onToggle={onToggle}
            />
          )}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  input: {
    margin: 12,
    padding: 10,
    borderWidth: 2,
    borderColor: '#cc0000',
    borderRadius: 8,
    fontSize: 15,
    backgroundColor: '#fff',
  },
  list: {
    paddingHorizontal: 6,
    paddingBottom: 20,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  message: {
    textAlign: 'center',
    padding: 20,
    fontSize: 15,
    color: '#666',
  },
  error: {
    textAlign: 'center',
    padding: 20,
    fontSize: 15,
    color: 'red',
  },
});

export default HomeScreen;
