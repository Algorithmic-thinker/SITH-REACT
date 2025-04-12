import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'
import { Outlet } from 'react-router'
import useOnline from './utils/useOnline'

function App() {

  const searchInputRef = useRef();
  const handleButtonClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const isOnline = useOnline();


  return (
    <div>
      {!isOnline && <div>
          <p className='text-white p-4 text-xl text-center bg-black '>you are Offline</p>
          <div className="fixed top-0 h-full w-full bg-gray-400 opacity-50 z-50"></div>
      </div>}
      <Header onButtonClick={handleButtonClick}/>
      <Outlet context={searchInputRef}/>
      <Footer/>
    </div>
  )
}

export default App
