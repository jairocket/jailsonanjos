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
  overflow: hidden;
  right: 1rem;
  top: 5rem;
`

export const MobileNavBar = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    width: 12rem;
  }
`
export const ListItem = styled.li`
  list-style: none;
  margin: 0.25rem;
  height: 2.5rem;

  @media screen and (min-width: 768px) {
    margin: 1rem;
  }
`
export const LinkContainer = styled.a`
  color: ${(props) => props.theme['gray-900']};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme['blue']};
  }

  @media screen and (min-width: 768px) {
    color: ${(props) => props.theme['gray-300']};
  }
`
