import './App.css'
import { Job } from './components/Job'
import { User } from './components/User'
import { Planet } from './components/Planet'
import { People, Planets } from './FakeData'
import { useState } from 'react'

// if renamed to App.modules.css you can specify css objects by using
// import styles from "./App.module.css" and pass as style={styles.classname}

function App() {
  const [age, setAge] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [showText, setShowText] = useState(false)
  const [textColor, setTextColor] = useState('green')
  const increaseAge = () => {
    console.log('before', age)
    setAge(age + 1)
  }
  return (
    <div className="App">
      {age}
      <button
        onClick={() => {
          increaseAge()
        }}
      >
        Increase Age
      </button>
      <button
        onClick={() => {
          setAge(age - 1)
        }}
      >
        Decrease Age
      </button>
      <button
        onClick={() => {
          setAge(0)
        }}
      >
        0 Age
      </button>
      {'  '}
      <input
        type="text"
        placeholder="pass anything..."
        value={inputValue}
        onChange={(event) => {
          console.log(event.target.value)
          setInputValue(event.target.value)
        }}
      />
      <hr></hr>
      {showText === true && <h1 style={{ color: textColor }}> Show Text</h1>}
      <button
        onClick={() => {
          setShowText(!showText)
          setTextColor(textColor === 'green' ? 'red' : 'black')
        }}
      >
        Show/Hide
      </button>
    </div>
  )
}

export default App
