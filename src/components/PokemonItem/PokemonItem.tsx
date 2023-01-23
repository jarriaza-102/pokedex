import { PokemonItemTitle, Wrapper } from './PokemonItem.styles';

export type PokemonItemProps = {
  name: string;
  isFavorite: boolean;
  toggleFavorite: (name: string) => void;
};

export function PokemonItem({
  name,
  isFavorite,
  toggleFavorite,
}: PokemonItemProps) {
  return (
    <Wrapper>
      <PokemonItemTitle>{name}</PokemonItemTitle>
      <div
        onClick={(e) => {
          e.stopPropagation();

          toggleFavorite(name);
        }}
      >
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </div>
    </Wrapper>
  );
}
