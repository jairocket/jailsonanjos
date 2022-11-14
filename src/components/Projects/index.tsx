type ProjectType = {
  title: string
  description: string
}

export function Projects({ title, description }: ProjectType) {
  return (
    <div key={title}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}
