import { useTranslation } from 'react-i18next'
import { SkillsContainer } from './styles'

export function Skills() {
  const {t} = useTranslation()

  return (
    <SkillsContainer>
      <p>
        {t('skills.frontend')}<span>Java</span>, <span>Spring</span>, <span>JUnit</span>, <span>Test Containers, </span>
         <span>PostgresQL</span>, <span>MySQL</span>, <span>TypeScript, </span> <span>NodeJS, </span> <span>NestJs &</span>
          <span> Git.</span> <br/><br />
        {t('skills.studying')} <span>ReactJS,</span>, <span>React Testing Library,</span> <span>Styled-Components &</span> 
        <span> Jest.</span>
      </p>
    </SkillsContainer>
  )
}
