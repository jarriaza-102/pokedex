import { rawPokemon } from '../../test/mocks/rawPokemon';
import { mapApiToPokemon } from './pokemonDataMapper'

describe('pokemonDataMapper', () => {

  describe('mapApiToPokemon', () => {
    it('works correctly', () => {
      expect(mapApiToPokemon(rawPokemon)).toMatchSnapshot();
    })
  })

})