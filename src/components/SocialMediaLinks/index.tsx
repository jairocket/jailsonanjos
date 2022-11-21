import { SocialMediaContainer } from './styles'
import { GithubLogo, LinkedinLogo, Envelope } from 'phosphor-react'
import { DevLogo } from '../../components/DevLogo'

export function SocialMediaLinks() {
  return (
    <SocialMediaContainer>
      <a href="https://www.linkedin.com/in/jailsonanjos/" target={'_blank'}>
        <LinkedinLogo size={32} color={'white'} />
      </a>
      <a href="https://github.com/jairocket" target={'_blank'}>
        <GithubLogo size={32} color={'white'} />
      </a>
      <a href="https://dev.to/jairocket" target={'_blank'}>
        <DevLogo />
      </a>
      <a href="mailto:jailsonanjos@hotmail.com?subject=Oportunidade">
        <Envelope size={32} color={'white'} />
      </a>
    </SocialMediaContainer>
  )
}
