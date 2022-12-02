import { ArticlesContainer } from './styles'

type ArticleType = {
  href: string
  title: string
  description: string
}

export function Article({ href, title, description }: ArticleType) {
  return (
    <ArticlesContainer key={title}>
      <a href={href}>{title}</a>
      <span>{description}</span>
    </ArticlesContainer>
  )
}
