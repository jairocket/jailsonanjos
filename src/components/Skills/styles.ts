import styled from 'styled-components'

export const SkillsContainer = styled.div`
  margin: 2rem;
  line-height: 1.6;
  ul {
    padding: 1.2rem;
    list-style: none;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
  }
`
