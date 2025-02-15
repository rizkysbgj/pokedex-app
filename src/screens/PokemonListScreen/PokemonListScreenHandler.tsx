import axios from 'axios';

const capitalizedString = (str: string) => {
  return String(str[0]).toUpperCase() + String(str).slice(1);
}

const fetchPokemonDetail = async (url: string) => {
  const response = await axios.get(url);
  const { types, id } = response.data;
  const mappedTypes = types.map((item: { type: { name: any; }; }) => {
    return capitalizedString(item.type.name);
  })
  return { types: mappedTypes, id };
} 

const fetchPokemon = async (offset: number, limit: number) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  const { next, results } = response.data;
  const isHasNext = next !== null;
  const pokemons = await Promise.all(results.map(async (item: { name: string; url: string; }) => {
    const { name, url } = item;
    const capitalizedName = capitalizedString(name);
    const { types, id } = await fetchPokemonDetail(url);

    return { id, name: capitalizedName, types };
  }));

  return { pokemons, isHasNext };
}

export { fetchPokemon };