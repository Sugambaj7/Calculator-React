import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  const handleChangeTheme = () => {}

  return (
    <div>
      <header handleChangeTheme={handleChangeTheme}/>
    </div>
  )
}

export default App
