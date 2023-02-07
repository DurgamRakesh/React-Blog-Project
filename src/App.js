import React from 'react'
import Footer from './Component/Footer'
import Header from './Component/Header'
import Nav from './Component/Nav'
import RouteFile from './Component/RouteFile'
import Details from './Pages/Details'

const App = () => {
  return (
    <div>
        <Details>
          <Header/>
          <Nav/>
          <RouteFile/>
          <Footer/>
        </Details>

    </div>
  )
}

export default App