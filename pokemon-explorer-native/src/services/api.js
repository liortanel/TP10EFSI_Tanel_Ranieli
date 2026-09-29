import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async (limit = 100) => {
  const { data } = await axios.get(`${BASE_URL}/pokemon?limit=${limit}`);

  const detailRequests = data.results.map(({ url }) => axios.get(url));
  const details = await Promise.all(detailRequests);

  return details.map(({ data: p }) => ({
    id: p.id,
    name: p.name,
    image: p.sprites.other['official-artwork'].front_default || p.sprites.front_default,
    types: p.types.map(({ type }) => type.name),
    weight: p.weight,
    height: p.height,
  }));
};
