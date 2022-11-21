import styled from 'styled-components'

export const ArticlesContainer = styled.div`
  margin: 2rem;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 4rem;
  width: 91.75vw;

  a {
    color: ${(props) => props.theme['gray-100']};
    padding: 1rem;
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme['blue']};
    }
  }
  span {
    margin: 1rem 0;
    font-family: 'Roboto', sans-serif;
  }
`
