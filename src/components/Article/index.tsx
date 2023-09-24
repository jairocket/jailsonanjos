import { Flag } from '../Flag'
import { ArticlesContainer, Wrapper } from './styles'

import BrFlag from '../../assets/BrFlag.svg'
import EsFlag from '../../assets/EsFlag.svg'

type ArticleType = {
  href: string
  title: string
  description: string
  language: string
}

export function Article({ href, title, description, language }: ArticleType) {
  return (
    <Wrapper>
      {language === "br" ? (
        <div>
          <Flag image={BrFlag} isSelected={false} /> 
        </div> 
      ) : (
        <div>
          <Flag image={EsFlag} isSelected={false}/>
        </div>
        )
      }
      <ArticlesContainer key={title}>
        <a href={href} target={'_blank'}>
          {title}
        </a>
        <span>{description}</span>
      </ArticlesContainer>
    </Wrapper>
  )
}
