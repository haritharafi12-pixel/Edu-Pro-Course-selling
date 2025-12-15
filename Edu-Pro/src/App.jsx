import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import LandingPage from './Pages/LandingPage'
import Course from './Pages/Course'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import PageNotFound from './Pages/PageNotFound'
import { Route, Routes } from 'react-router-dom'


function App() {
  
  return (
    <>
     <Header/>
     {/* <LandingPage/>
     <Course/>  */}
     {/* <Footer/>
     <Contact/> */}

     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path ='/course'element={<Course/>}/>
      <Route path ='/contact' element={<Contact/>}/>
      <Route path='*' element={<PageNotFound/>}/>
     </Routes>
    </>
  )
}

export default App
