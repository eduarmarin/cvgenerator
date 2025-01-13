import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import viteLogo from '../public/vite.svg'
import './App.css'
import Experience from './files/experience.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <h1>CV generator</h1>
      </nav>

      <div className = 'maincontainer'>
        <div className='formcontainer'>
          <p>"formcontainer" div to show form</p>
          <Experience/>
        </div>
        <div className='cvcontainer'>
          "cvcontainer" div to show cv
        </div>
      </div>

      <footer className='footerdiv'>
        footer
      </footer>
      
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
