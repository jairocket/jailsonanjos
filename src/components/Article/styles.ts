import styled from 'styled-components'

export const ArticlesContainer = styled.div`
  margin-left: 1.5rem;
  line-height: 1.6;
  text-align: justify;
  width: 100%;

  a {
    color: ${(props) => props.theme['gray-100']};
    padding-right: 1rem;
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
