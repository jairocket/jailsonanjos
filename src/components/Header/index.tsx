import { Avatar } from '../Avatar'
import happyAvatar from '../../assets/happy-avatar.svg'
import { SandwichButton } from '../SandwichButton'
import { HeaderContainer } from './styles'
import { useState } from 'react'
import { NavBar } from '../NavBar'

export function Header() {
  const [showNavbar, setShowNavbar] = useState(false)
  const handleClick = () => setShowNavbar(!showNavbar)

  return (
    <HeaderContainer>
      <Avatar src={happyAvatar} size={'small'} />
      <NavBar isMobile />
      <SandwichButton handleClick={handleClick} />
      {showNavbar && <NavBar handleClick={handleClick} />}
    </HeaderContainer>
  )
}
