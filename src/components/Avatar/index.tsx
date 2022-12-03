import { AvatarContainer, AvatarSmall, AvatarLarge } from './styles'

type AvatarPropsType = {
  src: string
  size: 'small' | 'large'
  hideable?: boolean
}

export function Avatar({ src, size, hideable }: AvatarPropsType) {
  const AvatarPicture = size === 'small' ? AvatarSmall : AvatarLarge

  return (
    <AvatarContainer>
      <AvatarPicture src={src} />
    </AvatarContainer>
  )
}
