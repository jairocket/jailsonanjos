import { useTranslation } from 'react-i18next'
import { MobileNavBar, LinkContainer, ListItem, NavContainer } from './styles'
import { LanguageSelector } from '../LanguageSelector'

type NavBarType = {
  isMobile?: boolean
  handleClick?: () => void
}

export function NavBar({ isMobile, handleClick }: NavBarType) {
  const NavBarContainer = isMobile ? MobileNavBar : NavContainer

  const {t} = useTranslation()
  return (
    <NavBarContainer>
      <ListItem>
        <LinkContainer href="#projects" onClick={handleClick}>
          {t("section.projects")}
        </LinkContainer>
      </ListItem>
      <ListItem onClick={handleClick}>
        <LinkContainer href="#articles">
          {t("section.articles")}
        </LinkContainer>
      </ListItem>
    </NavBarContainer>
  )
}
