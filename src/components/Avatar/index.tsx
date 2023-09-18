import { LanguageSelector } from '../LanguageSelector'
import { SocialMediaLinks } from '../SocialMediaLinks'
import {
  AvatarContainer,
  AvatarSmall,
  AvatarLarge,
  AvatarViewContainer,
} from './styles'

type AvatarPropsType = {
  src: string
  size: 'small' | 'large'
}

export function Avatar({ src, size }: AvatarPropsType) {
  const AvatarPicture = size === 'small' ? AvatarSmall : AvatarLarge

  return (
    <AvatarViewContainer>
      <AvatarContainer>
        <AvatarPicture src={src} />
      </AvatarContainer>
      {size !== 'small' && <SocialMediaLinks isLargeScreen />}
    </AvatarViewContainer>
  )
}
