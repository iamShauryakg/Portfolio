
import { useState } from 'react'
import './App.css'
import Home_page from './pages/Home'

import { LoadingScreen } from './components/LoadingScreen'

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
