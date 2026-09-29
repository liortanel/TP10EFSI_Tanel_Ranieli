# Pokédex Explorer

## Integrantes
- Tanel Ranieli

## API utilizada
[PokéAPI](https://pokeapi.co/) — API pública y gratuita de Pokémon.

## Descripción
Aplicación web que permite explorar los primeros 150 Pokémon, buscarlos por nombre y guardarlos como favoritos. Los favoritos se persisten usando localStorage.

## Organización de componentes

```
src/
├── components/
│   ├── Header.jsx        # Barra de navegación superior
│   ├── SearchBar.jsx     # Input de búsqueda/filtro
│   ├── PokemonCard.jsx   # Tarjeta individual de un Pokémon
│   └── PokemonList.jsx   # Grilla de tarjetas
├── pages/
│   ├── Home.jsx          # Vista principal con listado y buscador
│   └── Favorites.jsx     # Vista de favoritos guardados
├── services/
│   └── api.js            # Llamadas a la PokéAPI con Axios
└── App.jsx               # Raíz: Router, estado global de favoritos
```

## Funcionalidades
- Consulta a la PokéAPI al iniciar (primeros 150 Pokémon)
- Mensaje de carga y manejo de errores
- Listado en grilla con imagen, nombre, tipos, peso y altura
- Buscador por nombre con filtrado en tiempo real
- Agregar/quitar favoritos (sin duplicados)
- Favoritos persistidos en localStorage
- Navegación entre Inicio y Favoritos con React Router

## Diferencias entre React Web y React Native
- En web se usan etiquetas HTML (`div`, `p`, `button`); en RN se usan `View`, `Text`, `Pressable`
- Los estilos web son archivos `.css`; en RN se usa `StyleSheet.create()`
- La persistencia web usa `localStorage`; RN usa `AsyncStorage`
- En RN se usa `FlatList` en vez de `.map()` para manejar listas largas con mejor rendimiento
- La navegación web usa React Router; la mobile usa `@react-navigation/bottom-tabs`

## Scripts
```bash
npm install
npm run dev
```
