import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Card = (props) => {
    const {title,imgUrl,description,techId} = props;
  return (
    <Link to='/SinglePageDetails'>
    <NavLink state={{
        title:title,
        imgUrl:imgUrl,
        description:description,
        id:techId
    }} to={`${techId}`}>
        <div>
            <div>
                <div>
                    <img src={imgUrl} alt="404_img_notfound" />
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <hr /> 
        </div>
    </NavLink>
    </Link>
  )
}

export default Card