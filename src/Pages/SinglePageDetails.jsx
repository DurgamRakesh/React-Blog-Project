import React from 'react'
import SingleDataComponent from './SingleDataComponent'
import { Link } from 'react-router-dom'

const SinglePageDetails = () => {
  return (
    <div>
      <SingleDataComponent/>
      <Link style={{textDecoration:'none'}} to='/'><button style={{display:'block',margin:'20px auto',padding:'1rem',color:'white',backgroundColor:'black',fontSize:'1rem',borderRadius:'25px',cursor:'pointer'}} >Goto Home</button></Link>
    </div>
  )
}

export default SinglePageDetails