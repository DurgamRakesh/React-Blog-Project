import React from 'react'
import Home from '../Pages/Home'
import Bollywood from '../Pages/Bollywood'
import Technology from '../Pages/Technology'
import Hollywood from '../Pages/Hollywood'
import Fitness from '../Pages/Fitness'
import Food from '../Pages/Food'
import { Route, Routes } from 'react-router-dom'
import SingleDataComponent from '../Pages/SingleDataComponent'
import SinglePageDetails from '../Pages/SinglePageDetails'

const RouteFile = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Bollywood' element={<Bollywood/>}/>
        <Route path='/Technology' element={<Technology/>}/>
        <Route path='/Hollywood' element={<Hollywood/>}/>
        <Route path='/Fitness' element={<Fitness/>}/>
        <Route path='/Food' element={<Food/>}/>
        <Route path=':category/articleid' element={<SingleDataComponent/>}/>
        <Route path='*' element={<SinglePageDetails/>}/>
    </Routes>
  )
}

export default RouteFile