import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'
import { Outlet } from 'react-router'

function App() {

  const searchInputRef = useRef();
  const handleButtonClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };


  return (
    <div>
      <Header onButtonClick={handleButtonClick}/>
      <Outlet context={searchInputRef}/>
      <Footer/>
    </div>
  )
}

export default App
