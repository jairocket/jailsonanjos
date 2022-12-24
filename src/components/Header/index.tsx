import { Avatar } from '../Avatar'
import happyAvatar from '../../assets/happy-avatar.svg'
import { Button } from '../Button'
import { HeaderContainer } from './styles'
import { useState } from 'react'
import { NavBar } from '../NavBar'
import sandwichButton from '../../assets/sandwich-button.svg'

export function Header() {
  const [showNavbar, setShowNavbar] = useState(false)
  const handleClick = () => setShowNavbar(!showNavbar)

  return (
    <HeaderContainer>
      <Avatar src={happyAvatar} size={'small'} />
      <NavBar isMobile />
      <Button src={sandwichButton} handleClick={handleClick} />
      {showNavbar && <NavBar handleClick={handleClick} />}
    </HeaderContainer>
  )
}
