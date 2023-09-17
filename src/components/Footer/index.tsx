import arrowUp from '../../assets/arrow-up.svg'
import { Button } from '../Button'
import { FooterContainer } from './styles'

export function Footer() {
  const handleClick = () => window.scrollTo(0, 0)
  const info = 'Voltar ao topo'
  return (
    <FooterContainer>
      <Button src={arrowUp} handleClick={handleClick} info={info} />
    </FooterContainer>
  )
}
