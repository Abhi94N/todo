export const Job = (props) => {
  const { salary, position, company } = props

  return (
    <div>
      <h1>{salary}</h1>
      <h2>{position}</h2>
      <h2>{company}</h2>
    </div>
  )
}
