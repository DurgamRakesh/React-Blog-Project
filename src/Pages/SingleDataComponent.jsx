import React from 'react'
import { useLocation } from 'react-router-dom'
import './SingleDataComponent.css'

const SingleDataComponent = () => {
  const location = useLocation();
  const { title,img,description } = location.state;
  console.log(location.state);
  return (
    <div className='singledata-div'>
      <h1>{title}</h1>
      <img src={img} alt="404_img_notfound"/>
      <p>{description}</p>
    </div>
  )
}

export default SingleDataComponent