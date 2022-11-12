import { Avatar } from '../Avatar'
import coolAvatar from '../../../public/happy-avatar.svg'
import { SandwichButton } from '../SandwichButton'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Avatar src={coolAvatar} size={'small'} />
      <SandwichButton />
    </HeaderContainer>
  )
}
