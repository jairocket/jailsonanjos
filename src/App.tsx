import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/Themes/default'
import { GlobalStyle } from './styles/globals'
import { Avatar } from './components/Avatar'
import { Header } from './components/Header'
import coolAvatar from '../src/assets/cool-avatar.svg'
import {
  AppContainer,
  Heading,
  Heading2,
  HeadingAndData,
  IdContainer,
} from './styles/styles'

import { Projects } from './components/Projects'
import { ProjectsContainer } from './components/Projects/styles'
import { ArticlesContainer } from './components/Article/styles'
import { Article } from './components/Article'
import { SocialMediaLinks } from './components/SocialMediaLinks'
import { Skills } from './components/Skills'

import { mainStacks, knownStacks, projects, articles } from './data'
import { Footer } from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <AppContainer className="App">
        <IdContainer>
          <Avatar size={'large'} src={coolAvatar} />
          <HeadingAndData>
            <Heading>
              Oi, eu sou <span>Jailson Anjos</span>
            </Heading>
            <h3>Eu construo interfaces para aplicativos da web</h3>
            <Skills />
            <SocialMediaLinks />
          </HeadingAndData>
        </IdContainer>

        <ProjectsContainer>
          <Heading2 id="projects">Projetos</Heading2>
          {projects.map((project) => {
            const { title, description, href } = project
            return (
              <Projects
                key={title}
                title={title}
                description={description}
                href={href}
              />
            )
          })}
        </ProjectsContainer>

        <ArticlesContainer>
          <Heading2 id="articles">Artigos</Heading2>
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
        <Footer />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
