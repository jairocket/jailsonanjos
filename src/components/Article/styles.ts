import styled from 'styled-components'

export const ArticlesContainer = styled.div`
  margin: 1rem;
  line-height: 1.6;
  text-align: justify;
  align-items: stretch;
  justify-content: flex-start;

  a {
    color: ${(props) => props.theme['gray-100']};
    padding-right: 1rem;
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme['blue']};
    }
  }
  span {
    font-family: 'Roboto', sans-serif;
  }
`
