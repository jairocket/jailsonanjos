type ProjectType = {
  title: string
  description: string
  href: string
}

export function Projects({ title, description, href }: ProjectType) {
  return (
    <div key={title}>
      <h4>
        <a href={href}>{title}</a>
      </h4>
      <p>{description}</p>
    </div>
  )
}
