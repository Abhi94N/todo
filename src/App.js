import './App.css'
import { Job } from './components/Job'
import { User } from './components/User'
import { People, Planets } from './FakeData'
import { Planet } from './components/Planet'
// if renamed to App.modules.css you can specify css objects by using
// import styles from "./App.module.css" and pass as style={styles.classname}

function App() {
  return (
    <div className="App">
      {People.map((person, key) => {
        return (
          <div key={key}>
            <User name={person.name} age={person.age} email={person.email} />
            <Job
              salary={person.salary}
              position={person.position}
              company={person.company}
            />
          </div>
        )
      })}

      {Planets.map((planet, key) => {
        return (
          <>
            {planet.isGasPlanet ? (
              <Planet name={planet.name} />
            ) : (
              <h1>Not Gassy enough</h1>
            )}
          </>
        )
      })}
    </div>
  )
}

export default App
