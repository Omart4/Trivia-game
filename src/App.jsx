import { useState } from 'react'
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'
import MainPage from './Pages/MainPage'


const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<MainPage/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
