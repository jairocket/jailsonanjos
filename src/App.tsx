import './App.css'
import { Avatar } from './components/Avatar'
import { Header } from './components/Header'
import coolAvatar from '../src/assets/cool-avatar.svg'
import { AppContainer } from './styles'

function App() {
  return (
    <>
      <Header />
      <AppContainer className="App">
        <Avatar size={'large'} src={coolAvatar} />
        <h1>
          Oi, eu sou <span>Jailson Anjos</span>
        </h1>
        <h3>Eu construo interfaces para aplicativos da web</h3>
      </AppContainer>
    </>
  )
}

export default App
