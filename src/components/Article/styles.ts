import styled from 'styled-components'

export const ArticlesContainer = styled.div`
  margin: 2rem;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 4rem;
  a {
    color: ${(props) => props.theme['gray-100']};
    padding: 1rem;
  }
  p {
    margin: 1rem 0;
  }
`
