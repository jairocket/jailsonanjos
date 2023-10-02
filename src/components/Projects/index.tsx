import { useTranslation } from 'react-i18next'
import { ProjectsContainer } from './styles'


export function Projects() {

  const { t } = useTranslation()
  return (
    <>
      <ProjectsContainer>
        <h4>
          <a href={'https://github.com/jairocket/projetoIntegrador-Wined/tree/react'} target={'_blank'}>
            Wined+
          </a>
        </h4>
        <p>{t("projects.description.wined")}</p>
      </ProjectsContainer>
      <ProjectsContainer>
        <h4>
          <a href={'https://github.com/jairocket/marvel-app'} target={'_blank'}>
            Marvellous Wiki
          </a>
        </h4>
        <p>{t("projects.description.marvellous")}</p>
      </ProjectsContainer>
    </>
  )
}
