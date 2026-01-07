import { Route, Routes } from 'react-router-dom'
import './App.css'
import HeroPage from './User/HeroPage'
import About from './User/About'
import Signup from './User/pages/Signup'
import { useEffect, useState } from 'react'
import PreLoader from './PreLoader'
import Login from './User/pages/Login'
import Home from './User/pages/Home'

function App() {

  const [loader,setloader]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setloader(false)
    },5000)

  },[])  

  return (
    <>
  <Routes>
    <Route path='/' element={loader ? <PreLoader/>:<HeroPage/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
  </Routes>
    </>
  )
}

export default App
