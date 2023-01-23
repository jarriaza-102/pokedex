import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  padding: 16px 0px;
  display: flex;
  justify-content: center;
  gap: 8px;
`

export const PaginationItem = styled.div<{ $active: boolean }>`
  font-weight: ${({ $active }) => $active ? 'bold' : 'normal'};
  border: 1px solid black;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;

  :hover {
    font-weight: bold;
  }
`