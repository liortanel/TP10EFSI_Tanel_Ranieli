import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import './App.css';

const STORAGE_KEY = 'pokedex_favorites';

const App = () => {
  // Inicializar desde localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Persistir favoritos en localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (pokemon) => {
    const exists = favorites.some((f) => f.id === pokemon.id);

    if (exists) {
      // Quitar de favoritos
      setFavorites((prev) => prev.filter((f) => f.id !== pokemon.id));
    } else {
      // Agregar — spread operator para no mutar el array
      setFavorites((prev) => [...prev, pokemon]);
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home favorites={favorites} onToggleFavorite={handleToggleFavorite} />}
        />
        <Route
          path="/favoritos"
          element={<Favorites favorites={favorites} onToggleFavorite={handleToggleFavorite} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
