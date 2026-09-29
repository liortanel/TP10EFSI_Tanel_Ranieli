import './SearchBar.css';

const SearchBar = ({ value, onChange }) => (
  <div className="searchbar">
    <input
      type="text"
      className="searchbar__input"
      placeholder="Buscar Pokémon..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Buscar Pokémon"
    />
  </div>
);

export default SearchBar;
