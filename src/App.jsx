import { useState } from 'react'
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import GamePage from './Pages/GamePage'
import GlobalContext from './Components/GlobalContext'


const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<MainPage/>}/>
      <Route path='game' element={<GamePage/>}/>
    </Route>
  )
)

function App() {
  const [api,setApi] = useState("")
  return (
    <GlobalContext.Provider value={{api,setApi}}>
      <RouterProvider router={router}/>
    </GlobalContext.Provider>
  )
}

export default App
