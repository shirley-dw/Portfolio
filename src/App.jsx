import { useState } from 'react'
import Header from './Header/Header.jsx'
import Section from './Section/Section.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Section />
    </>
  )
}

export default App
