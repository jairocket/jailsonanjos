import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  margin: 1rem;
  line-height: 1.6;
  text-align: justify;

  h2 {
    @media screen and (min-width: 768px) {
      padding: 1rem;
    }
  }

  h4 {
    font-family: 'Cinzel', serif;
  }
  a {
    color: ${(props) => props.theme['gray-100']};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme['blue']};
    }
  }
`
