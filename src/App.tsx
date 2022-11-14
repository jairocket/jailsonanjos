import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/Themes/default'
import { GlobalStyle } from './styles/globals'
import { Avatar } from './components/Avatar'
import { Header } from './components/Header'
import coolAvatar from '../src/assets/cool-avatar.svg'
import { AppContainer, Heading, SocialMediaContainer } from './styles/styles'
import { GithubLogo, LinkedinLogo, Envelope, TwitterLogo } from 'phosphor-react'
import { DevLogo } from './components/DevLogo'
import { Skills } from './components/Skills'
import { SkillsContainer } from './components/Skills/styles'
import { Projects } from './components/Projects'
import { ProjectsContainer } from './components/Projects/styles'
import { ArticlesContainer } from './components/Article/styles'
import { Article } from './components/Article'

const mainStacks = {
  title: 'Principais Stacks',
  stacks: [
    'HTML5',
    'CSS3',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'REACTJS',
    'STYLED-COMPONENTS',
  ],
}

const knownStacks = {
  title: 'Conhecimentos em',
  stacks: ['NODEJS', 'EXPRESS', 'SEQUELIZE', 'MYSQL'],
}

const projects = [
  {
    title: 'Wined+',
    description:
      'Rede social para amantes de vinhos. Permite cadastrar novos membros, confrarias e eventos. Por meio das confrarias, é possível interagir por meio de postagens, curtidas e comentários.',
  },
  {
    title: 'Marvellous Wiki',
    description: 'Descubra personagens, revistas e séries do universo Marvel.',
  },
]

const articles = [
  {
    href: 'https://dev.to/jairocket/comecando-com-jest-e-react-testing-library-10ck',
    title: 'Começando com Jest e React Testing Library:',
    description: 'Dê os primeiros passos com Jest e React Testing Library.',
  },
  {
    href: 'https://community.revelo.com/funcoes-como-objetos-em-javascript/',
    title: 'Funções como Objetos em JavaScript:',
    description:
      'Você verá conceitos básicos referentes à estrutura de objetos e sobre a natureza das funções em JavaScript.',
  },
]

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
        <SkillsContainer>
          <Skills title={mainStacks.title} skillsList={mainStacks.stacks} />
          <Skills title={knownStacks.title} skillsList={knownStacks.stacks} />
        </SkillsContainer>

        <h2>Projetos</h2>
        <ProjectsContainer>
          {projects.map((project) => {
            const { title, description } = project
            return (
              <Projects key={title} title={title} description={description} />
            )
          })}
        </ProjectsContainer>

        <h2>Artigos</h2>
        <ArticlesContainer>
          {articles.map((article) => {
            const { href, title, description } = article
            return (
              <Article
                key={title}
                href={href}
                title={title}
                description={description}
              />
            )
          })}
        </ArticlesContainer>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
