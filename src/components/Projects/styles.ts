import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  margin: 2rem;
  line-height: 1.6;
  text-align: justify;
  width: 90vw;
  h4 {
    font-family: 'Cinzel', serif;
    padding: 1rem;
  }
  a {
    color: ${(props) => props.theme['gray-100']};
    padding: 1rem;
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme['blue']};
    }
  }
`
