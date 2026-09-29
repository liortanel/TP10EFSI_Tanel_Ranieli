import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

const typeColors = {
  fire: '#F08030', water: '#6890F0', grass: '#78C850', electric: '#F8D030',
  psychic: '#F85888', ice: '#98D8D8', dragon: '#7038F8', dark: '#705848',
  normal: '#A8A878', fighting: '#C03028', flying: '#A890F0', poison: '#A040A0',
  ground: '#E0C068', rock: '#B8A038', bug: '#A8B820', ghost: '#705898',
  steel: '#B8B8D0', fairy: '#EE99AC',
};

const PokemonCard = ({ pokemon, isFavorite, onToggle }) => {
  const { id, name, image, types, weight, height } = pokemon;

  return (
    <View style={styles.card}>
      <Text style={styles.id}>#{String(id).padStart(3, '0')}</Text>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="contain"
        accessibilityLabel={`Imagen de ${name}`}
      />
      <Text style={styles.name}>{name}</Text>

      <View style={styles.typesRow}>
        {types.map((type) => (
          <View
            key={type}
            style={[styles.typeBadge, { backgroundColor: typeColors[type] || '#777' }]}
          >
            <Text style={styles.typeText}>{type}</Text>
          </View>
        ))}
      </View>

      <View style={styles.statsRow}>
        <Text style={styles.stat}>Peso: {weight / 10} kg</Text>
        <Text style={styles.stat}>Altura: {height / 10} m</Text>
      </View>

      <Pressable
        style={[styles.btn, isFavorite && styles.btnActive]}
        onPress={() => onToggle(pokemon)}
        accessibilityLabel={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      >
        <Text style={[styles.btnText, isFavorite && styles.btnTextActive]}>
          {isFavorite ? '★ Quitar favorito' : '☆ Favorito'}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    margin: 6,
    flex: 1,
    alignItems: 'center',
    elevation: 3,
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
  },
  id: {
    fontSize: 11,
    color: '#999',
    alignSelf: 'flex-start',
  },
  image: {
    width: 90,
    height: 90,
    marginVertical: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginBottom: 4,
  },
  typesRow: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 6,
  },
  typeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  typeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  stat: {
    fontSize: 12,
    color: '#555',
  },
  btn: {
    borderWidth: 1.5,
    borderColor: '#cc0000',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  btnActive: {
    backgroundColor: '#cc0000',
  },
  btnText: {
    color: '#cc0000',
    fontWeight: 'bold',
    fontSize: 12,
  },
  btnTextActive: {
    color: '#fff',
  },
});

export default PokemonCard;
