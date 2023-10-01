import { useTranslation } from 'react-i18next'
import arrowUp from '../../assets/arrow-up.svg'
import { Button } from '../Button'
import { FooterContainer } from './styles'

export function Footer() {
  const {t} = useTranslation()
  const handleClick = () => window.scrollTo(0, 0)
  const info = t("scroll.top")
  return (
    <FooterContainer>
      <Button src={arrowUp} handleClick={handleClick} info={info} />
    </FooterContainer>
  )
}
