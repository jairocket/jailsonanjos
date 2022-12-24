import { ButtonContainer } from './styles'

type ButtonType = {
  handleClick: () => void
  src: string
}
export function Button({ handleClick, src }: ButtonType) {
  return (
    <ButtonContainer type="button" onClick={handleClick}>
      <img src={src} />
    </ButtonContainer>
  )
}
