import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  margin: 1rem;
  line-height: 1.6;
  text-align: justify;

  @media screen and (min-width: 768px) {
    margin: 1rem 5rem;
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
