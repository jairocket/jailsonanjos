import arrowUp from '../../assets/arrow-up.svg'
import { Button } from '../Button'
import { SpanContainer, FooterContainer } from './styles'

export function Footer() {
  const handleclick = () => window.scrollTo(0, 0)
  const info = 'Voltar ao topo'
  return (
    <FooterContainer>
      <Button src={arrowUp} handleClick={handleclick} info={info} />
    </FooterContainer>
  )
}
