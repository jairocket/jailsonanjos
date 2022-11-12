import sandwichButton from '../../assets/sandwich-button.svg'
import { SandwichButtonContainer } from './styles'

export function SandwichButton() {
  return (
    <SandwichButtonContainer type="button" onClick={() => console.log('click')}>
      <img src={sandwichButton} />
    </SandwichButtonContainer>
  )
}
