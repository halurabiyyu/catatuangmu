import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './pages/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome></Welcome>
    </>
  )
}

export default App
