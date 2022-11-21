import styled from 'styled-components'

export const NavContainer = styled.nav`
  background-color: ${(props) => props.theme['gray-300']};
  height: 5rem;
  width: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 8px;
  position: absolute;
  overflow: auto;
  right: 1rem;
  top: 5rem;

  li {
    list-style: none;
    margin: 0.25rem;
    height: 2.5rem;
  }

  a {
    color: ${(props) => props.theme['gray-900']};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme['blue']};
    }
  }
`
