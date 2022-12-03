import styled from 'styled-components'

export const SkillsContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    padding: 1rem;
    margin: 3rem 1rem 0;
    line-height: 1.6;
    text-align: justify;
    justify-content: flex-start;

    h2 {
      margin-bottom: 2rem;
    }
  }
`
