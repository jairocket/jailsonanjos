import { MobileNavBar, LinkContainer, ListItem, NavContainer } from './styles'

type NavBarType = {
  isMobile?: boolean
  handleClick?: () => void
}

export function NavBar({ isMobile, handleClick }: NavBarType) {
  const NavBarContainer = isMobile ? MobileNavBar : NavContainer
  return (
    <NavBarContainer>
      <ListItem>
        <LinkContainer href="#projects" onClick={handleClick}>
          Projetos
        </LinkContainer>
      </ListItem>
      <ListItem onClick={handleClick}>
        <LinkContainer href="#articles">Artigos</LinkContainer>
      </ListItem>
    </NavBarContainer>
  )
}
