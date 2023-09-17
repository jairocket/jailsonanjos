import { useTranslation } from 'react-i18next'
import { SkillsContainer } from './styles'

export function Skills() {
  const {t} = useTranslation()

  return (
    <SkillsContainer>
      <p>
        {t('skills.frontend')}<span>ReactJS,</span> <span>TypeScript,</span>{' '}
        <span>Styled-Components,</span> <span> Jest,</span> <span>React Testing Library,</span> <span> JavaScript, </span> {' '}
        <span>HTML5,</span> <span>CSS3 &</span><span> Git.</span> <br/>
        {t('skills.studying')} <span>NodeJS,</span> <span>Express,</span>{' '}
        <span>MySQL & </span><span>Sequelize</span>.
      </p>
    </SkillsContainer>
  )
}
