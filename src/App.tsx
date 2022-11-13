import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/Themes/default'
import { GlobalStyle } from './styles/globals'
import { Avatar } from './components/Avatar'
import { Header } from './components/Header'
import coolAvatar from '../src/assets/cool-avatar.svg'
import { AppContainer, Heading, SocialMediaContainer } from './styles/styles'
import { GithubLogo, LinkedinLogo, Envelope } from 'phosphor-react'
import { DevLogo } from './components/DevLogo'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <AppContainer className="App">
        <Avatar size={'large'} src={coolAvatar} />
        <Heading>
          Oi, eu sou <span>Jailson Anjos</span>
        </Heading>
        <h3>Eu construo interfaces para aplicativos da web</h3>
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
        <h2>Principais Stacks</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JAVASCRIPT</li>
          <li>TYPESCRIPT</li>
          <li>REACTJS</li>
          <li>STYLED-COMPONENTS</li>
        </ul>
        <h2>Conhecimentos em</h2>
        <ul>
          <li>NODEJS</li>
          <li>EXPRESS</li>
          <li>SEQUELIZE</li>
          <li>MYSQL</li>
        </ul>
        <h2>Projetos</h2>
        <ul>
          <li>Wined+</li>
          <li>Marvellous</li>
        </ul>
        <h2>Artigos</h2>
        <ul>
          <li>link</li>
          <li>link</li>
        </ul>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
