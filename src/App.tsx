import './App.css'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/Themes/default'
import { GlobalStyle } from './styles/globals'
import { Avatar } from './components/Avatar'
import { Header } from './components/Header'
import coolAvatar from '../src/assets/cool-avatar.svg'
import { AppContainer, SocialMediaContainer } from './styles/styles'
import { GithubLogo, LinkedinLogo, Envelope } from 'phosphor-react'
import { DevLogo } from './components/DevLogo'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <AppContainer className="App">
        <Avatar size={'large'} src={coolAvatar} />
        <h1>
          Oi, eu sou <span>Jailson Anjos</span>
        </h1>
        <h3>Eu construo interfaces para aplicativos da web</h3>
        <SocialMediaContainer>
          <div>
            <LinkedinLogo size={32} color={'white'} />
          </div>
          <div>
            <GithubLogo size={32} color={'white'} />
          </div>
          <div>
            <DevLogo />
          </div>
          <div>
            <Envelope size={32} color={'white'} />
          </div>
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
