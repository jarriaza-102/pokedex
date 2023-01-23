import styled from 'styled-components'

export const TabBarWrapper = styled.div`
  display: flex;
  background: #eee;
`

export const TabWrapper = styled.div`
  padding: 16px;
  flex-basis: 50%;
  text-align: center;
  cursor: pointer;

  :hover {
    background: #ccc;
  }
`