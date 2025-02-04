import { useState } from 'react'
import './App.css'
import Canvas from './components/Canvas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Kakitaihoudai
      </h1>
      <div className="card">
        <input placeholder='username'></input>
        <br></br>
        <input placeholder='password'></input>
        <br></br>
        <button>
          Login
        </button>
        <br></br>
        <button>
          Register
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Canvas />
    </>
  )
}

export default App
