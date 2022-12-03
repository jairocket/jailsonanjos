import styled from 'styled-components'

export const ArticlesContainer = styled.div`
  margin: 1rem;
  line-height: 1.6;
  text-align: justify;
  align-items: stretch;
  justify-content: flex-start;

  @media screen and (min-width: 768px) {
    margin: 1rem 4rem;
  }

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
