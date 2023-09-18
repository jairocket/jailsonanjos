import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 1.5rem;
  padding: 0 1rem;

  button {
    cursor: pointer;
    padding-top: 0.25rem;
  }

  @media screen and (min-width: 768px) {
    padding: 0 8rem;
    margin-bottom: 3rem;
  }
`

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
`