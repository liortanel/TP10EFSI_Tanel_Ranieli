# Pokédex Explorer — React Native

## Integrantes
- Tanel Ranieli

## API utilizada
[PokéAPI](https://pokeapi.co/) — API pública y gratuita de Pokémon.

## Descripción
Versión mobile de la Pokédex. Permite explorar los primeros 100 Pokémon, buscarlos y guardar favoritos. Los favoritos se persisten con AsyncStorage.

## Organización

```
src/
├── components/
│   └── PokemonCard.jsx     # Tarjeta reutilizable con StyleSheet
├── screens/
│   ├── HomeScreen.jsx      # Listado + buscador
│   └── FavoritesScreen.jsx # Favoritos guardados
├── services/
│   └── api.js              # Axios + PokéAPI
App.jsx                     # Raíz: Bottom Tab Navigator + estado favoritos
```

## Funcionalidades implementadas
- Consulta a la PokéAPI con Axios
- FlatList con 2 columnas para listado eficiente
- Buscador con TextInput y filtrado por nombre
- Tarjetas con imagen, nombre, tipos, peso y altura
- Favoritos con AsyncStorage (persisten al cerrar la app)
- Navegación con Bottom Tabs (Inicio / Favoritos)
- Badge en pestaña Favoritos con la cantidad guardada

## Diferencias con la versión React Web
- Se reemplazaron `div/p/button` por `View/Text/Pressable`
- Los estilos se definen con `StyleSheet.create()` en lugar de CSS
- La persistencia usa `AsyncStorage` en lugar de `localStorage`
- `FlatList` reemplaza al `.map()` para mejor performance en listas largas
- La navegación usa `@react-navigation/bottom-tabs` en lugar de React Router
- Las imágenes usan el componente `Image` de RN con `source={{ uri }}`

## Instalación y ejecución
```bash
npm install
npx expo start
```
