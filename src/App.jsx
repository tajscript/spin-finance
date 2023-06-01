import { useState } from 'react'
import NavBar from './components/NavBar'
import Bank from './components/Bank'
import Payment from './components/Payment'
import Budget from './components/Budget'
import Work from './components/Work'
import Learn from './components/Learn'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <Bank />
    <Payment/>
    <Budget />
    <Work />
    <Learn />
    <Footer />
    </>
  )
}

export default App
