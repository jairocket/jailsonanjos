import { Avatar } from '../Avatar'
import happyAvatar from '../../assets/happy-avatar.svg'
import { Triangle } from 'phosphor-react'
import { CustomButtom, FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <CustomButtom onClick={() => window.scrollTo(0, 0)}>
        {/*<Avatar src={happyAvatar} size={'small'} />*/}
        <Triangle size={32} color={'white'} />
        <p>Voltar para o topo</p>
      </CustomButtom>
    </FooterContainer>
  )
}
