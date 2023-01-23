import styled from 'styled-components';
import { getColSize } from './theme.utils';

export const Row = styled.div`
  display: flex;
  padding: 8px 0px;;
`;

export const Column = styled.div<{
  $size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}>`
  width: ${({ $size }) => getColSize($size)}
`;
