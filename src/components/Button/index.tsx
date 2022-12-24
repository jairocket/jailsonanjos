import { ButtonContainer, ButtonInformation } from './styles'

type ButtonType = {
  handleClick: () => void
  src: string
  info?: string
}
export function Button({ handleClick, src, info }: ButtonType) {
  return (
    <ButtonContainer type="button" onClick={handleClick}>
      <img src={src} />
      <ButtonInformation>{info}</ButtonInformation>
    </ButtonContainer>
  )
}
