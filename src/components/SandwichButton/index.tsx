import sandwichButton from '../../assets/sandwich-button.svg'
import { SandwichButtonContainer } from './styles'

export function SandwichButton() {
  return (
    <SandwichButtonContainer type="button">
      <img src={sandwichButton} />
    </SandwichButtonContainer>
  )
}
