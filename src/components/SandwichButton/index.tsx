import sandwichButton from '../../assets/sandwich-button.svg'
import { SandwichButtonContainer } from './styles'

type SandwichButtonType = {
  handleClick: () => void
}
export function SandwichButton({ handleClick }: SandwichButtonType) {
  return (
    <SandwichButtonContainer type="button" onClick={handleClick}>
      <img src={sandwichButton} />
    </SandwichButtonContainer>
  )
}
