import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import { Toaster } from'sonner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Toaster position='top-right' />
    <Routes>

      <Route path='/' element={<UserLayout/>}>
      <Route index element={<Home/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
