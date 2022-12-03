type SkillsType = {
  title: string
  skillsList: string[]
}

export function Skills({ title, skillsList }: SkillsType) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {skillsList.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
    </div>
  )
}
