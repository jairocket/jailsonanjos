import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background-color: transparent;
  border: transparent;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ButtonInformation = styled.p`
  font-family: 'Cinzel', serif;
  color: ${(props) => props.theme[`gray-100`]};
  font-size: 0.75rem;
`
