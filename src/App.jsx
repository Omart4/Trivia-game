import { useState } from 'react'
import MainPage from './Pages/MainPage'
import GamePage from './Pages/GamePage'
import GlobalContext from './Components/GlobalContext'



function App() {
  const [gameOn,setGameOn] = useState(false)
  const [api,setApi] = useState("")
  return (
    <GlobalContext.Provider value={{api,setApi,gameOn,setGameOn}}>
      <div className='home'>
        {!gameOn && <MainPage/>}
        {gameOn && <GamePage/>}
      </div>
    </GlobalContext.Provider>
  )
}

export default App
