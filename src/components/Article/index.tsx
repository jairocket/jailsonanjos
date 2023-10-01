import { Flag } from '../Flag'
import { ArticlesContainer, Wrapper } from './styles'

import BrFlag from '../../assets/BrFlag.svg'
import EsFlag from '../../assets/EsFlag.svg'

type ArticleType = {
  href: string
  title: string
}

export function Article({ href, title }: ArticleType) {
  return (
      <ArticlesContainer key={title}>
        <a href={href} target={'_blank'}>
          {title}
        </a>
      </ArticlesContainer>
  )
}
