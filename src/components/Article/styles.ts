import styled from 'styled-components'

export const ArticlesContainer = styled.div`
  margin: 1rem 0 1rem 1rem;
  line-height: 1.6;
  text-align: start;

  justify-content: flex-start;

  h2 {
    @media screen and (min-width: 768px) {
      padding: 1rem;
    }
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

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0.75rem;
`