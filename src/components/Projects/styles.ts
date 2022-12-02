import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  margin: 1rem;
  line-height: 1.6;
  text-align: justify;

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
