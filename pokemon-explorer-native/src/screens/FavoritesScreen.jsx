import { View, Text, FlatList, StyleSheet } from 'react-native';
import PokemonCard from '../components/PokemonCard';

const FavoritesScreen = ({ favorites, onToggle }) => (
  <View style={styles.container}>
    <Text style={styles.title}>★ Mis Favoritos</Text>

    {favorites.length === 0 ? (
      <Text style={styles.empty}>Todavía no agregaste favoritos.</Text>
    ) : (
      <FlatList
        data={favorites}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        renderItem={({ item }) => (
          <PokemonCard
            pokemon={item}
            isFavorite={true}
            onToggle={onToggle}
          />
        )}
        contentContainerStyle={styles.list}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 16,
    color: '#cc0000',
  },
  empty: {
    textAlign: 'center',
    padding: 40,
    fontSize: 15,
    color: '#666',
  },
  list: {
    paddingHorizontal: 6,
    paddingBottom: 20,
  },
});

export default FavoritesScreen;
