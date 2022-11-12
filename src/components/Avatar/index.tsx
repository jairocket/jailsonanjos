import { AvatarContainer, AvatarSmall, AvatarLarge } from './styles'

type AvatarPropsType = {
  src: string
  size: 'small' | 'large'
}

export function Avatar({ src, size }: AvatarPropsType) {
  const AvatarPicture = size === 'small' ? AvatarSmall : AvatarLarge
  return (
    <AvatarContainer>
      <AvatarPicture src={src} />
    </AvatarContainer>
  )
}
