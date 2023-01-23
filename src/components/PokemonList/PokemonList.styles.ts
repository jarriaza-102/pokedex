import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoWrapper = styled.div`
  img {
    width: 350px;
  }
`

export const PaginationWrapper = styled.div`
  text-align: center;
`

export const PokemonItemWrapper = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid #ccc;
`

export const PokemonItemTitle = styled.span`
  text-transform: capitalize;
`