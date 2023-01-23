import styled from 'styled-components'

export const TabBarWrapper = styled.div`
  display: flex;
  background: #eee;
`

export const TabWrapper = styled.div<{ $active: boolean }>`
  padding: 16px;
  flex-basis: 50%;
  text-align: center;
  cursor: pointer;
  font-weight: ${({ $active }) => $active ? 'bold' : 'normal'};

  :hover {
    background: #ccc;
  }
`