import { useTranslation } from 'react-i18next'
import { SkillsContainer } from './styles'

export function Skills() {
  const {t} = useTranslation()

  return (
    <SkillsContainer>
      <p>
        {t('skills.backend')} <span>Java, Spring, JUnit,Test Containers,
         PostgresQL, MySQL, TypeScript, NodeJS, NestJs & Git.</span>
      </p>  
      <p>  
        {t('skills.studying')} <span>ReactJS, Styled-Components, React Testing Library & Jest.</span>
      </p>
    </SkillsContainer>
  )
}
