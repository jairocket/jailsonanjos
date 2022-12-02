import { HideableNavBar, LinkContainer, ListItem, NavContainer } from './styles'

type NavBarType = {
  hideable?: boolean
}

export function NavBar({ hideable }: NavBarType) {
  const NavBarContainer = hideable ? HideableNavBar : NavContainer
  return (
    <NavBarContainer>
      <ListItem>
        <LinkContainer href="#projects">Projetos</LinkContainer>
      </ListItem>
      <ListItem>
        <LinkContainer href="#articles">Artigos</LinkContainer>
      </ListItem>
    </NavBarContainer>
  )
}
