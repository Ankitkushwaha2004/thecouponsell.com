import { useState } from 'react'  
import Nav from './nav'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
    </>
  )
}

export default App
