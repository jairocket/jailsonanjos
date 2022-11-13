import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  padding: 0 1rem;
  text-align: center;
  background-color: ${(props) => props.theme['gray-900']};
`

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;
  margin: 1.75rem;
`
export const Heading = styled.h1`
  padding: 0 1rem;

  span {
    font-size: 2.5rem;
    color: ${(props) => props.theme['blue']};
  }
`
