function App() {
  const name = 'Marco';
  const age = 19;

  const Hello = (props) => {
    return (
      <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
    )
  }

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App
