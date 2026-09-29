import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';

const Tab = createBottomTabNavigator();
const STORAGE_KEY = 'pokedex_favorites';

export default function App() {
  const [favorites, setFavorites] = useState([]);

  // Cargar favoritos desde AsyncStorage al iniciar
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) setFavorites(JSON.parse(stored));
      } catch (err) {
        console.error('Error al cargar favoritos:', err);
      }
    };
    loadFavorites();
  }, []);

  // Persistir favoritos al cambiar
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(favorites)).catch(
      (err) => console.error('Error al guardar favoritos:', err)
    );
  }, [favorites]);

  const handleToggle = (pokemon) => {
    const exists = favorites.some((f) => f.id === pokemon.id);
    if (exists) {
      setFavorites((prev) => prev.filter((f) => f.id !== pokemon.id));
    } else {
      setFavorites((prev) => [...prev, pokemon]);
    }
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#cc0000',
          tabBarInactiveTintColor: '#999',
          headerStyle: { backgroundColor: '#cc0000' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Tab.Screen
          name="Inicio"
          options={{
            title: '🔴 Pokédex',
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>🏠</Text>,
          }}
        >
          {() => <HomeScreen favorites={favorites} onToggle={handleToggle} />}
        </Tab.Screen>

        <Tab.Screen
          name="Favoritos"
          options={{
            title: 'Mis Favoritos',
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>★</Text>,
            tabBarBadge: favorites.length > 0 ? favorites.length : undefined,
          }}
        >
          {() => <FavoritesScreen favorites={favorites} onToggle={handleToggle} />}
        </Tab.Screen>
      </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
