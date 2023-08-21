export const User = (props) => {
  const { name, age, email } = props
  const isGreen = true
  const old =
    age >= 29 ? (
      <h2 style={{ color: isGreen ? 'green' : 'red' }}>This person is old</h2>
    ) : (
      <h2>This person doesn't remember 9/11</h2>
    )
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>{email}</h2>
      {old}
    </div>
  )
}
