import { SocialMediaLinks } from '../SocialMediaLinks'
import {
  AvatarContainer,
  AvatarSmall,
  AvatarLarge,
  AvatarViewContaiber,
} from './styles'

type AvatarPropsType = {
  src: string
  size: 'small' | 'large'
}

export function Avatar({ src, size }: AvatarPropsType) {
  const AvatarPicture = size === 'small' ? AvatarSmall : AvatarLarge

  return (
    <AvatarViewContaiber>
      <AvatarContainer>
        <AvatarPicture src={src} />
      </AvatarContainer>
      {size !== 'small' && <SocialMediaLinks isLargeScreen />}
    </AvatarViewContaiber>
  )
}
