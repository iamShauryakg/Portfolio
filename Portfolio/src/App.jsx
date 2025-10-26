
import { useState } from 'react'
import './App.css'
import Home_page from './Pages/Home'

import { LoadingScreen } from './Components/LoadingScreen'

function App() {

  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
    {!isLoaded && <LoadingScreen onComplete= {() => setIsLoaded(true)} />} {" "}
    <div className = {'min-h-screen transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-[#cdcdcd]'}>
      <Home_page />
    </div>
    </>
  )
}

export default App;
