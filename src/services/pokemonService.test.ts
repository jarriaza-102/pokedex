import { mockGet } from '../test/mocks/mockAxios';
import { parsedPokemon } from '../test/mocks/parsedPokemon';
import { rawPokemon } from '../test/mocks/rawPokemon';
import { rawPokemonResults } from '../test/mocks/rawPokemonResults';
import { getPokemonByName, getPokemons } from './pokemonService';

describe('pokemonService', () => {
  describe('getPokemons', () => {
    it('works correctly', async () => {
      mockGet.mockResolvedValueOnce({
        data: rawPokemonResults,
      });

      const result = await getPokemons(20, 10);

      expect(result).toEqual(rawPokemonResults);
      expect(mockGet).toHaveBeenCalledWith(expect.stringContaining('pokemon?limit=20&offset=10'))
    });

    it('throws an error', async () => {
      mockGet.mockRejectedValueOnce(new  Error('error'));

      await expect(getPokemons(20, 10)).rejects.toEqual(new Error('error'));
    });
  });

  describe('getPokemonByName', () => {
    it('works correctly', async () => {
      mockGet.mockResolvedValueOnce({
        data: rawPokemon,
      });

      const result = await getPokemonByName('bulbasaur');

      expect(result).toEqual(parsedPokemon);
      expect(mockGet).toHaveBeenCalledWith(expect.stringContaining('pokemon/bulbasaur'))
    });

    it('throws an error', async () => {
      mockGet.mockRejectedValueOnce(new  Error('error'));

      await expect(getPokemonByName('bulbasaur')).rejects.toEqual(new Error('error'));
    });
  });
});
