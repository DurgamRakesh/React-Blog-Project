import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeCardcomponent = (props) => {
    const {imgUrl,title,description,articleid} = props
  return (
    <NavLink state={{
        title:title,
        img:imgUrl,
        description:description,
        id:articleid
    }} to={`article/${articleid}`} >
        <div className={articleid}>
            <div>
                <div>
                    <img src={imgUrl} alt="404_img_notfound" />
                </div>
                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
            <hr />
        </div>
    </NavLink>
  )
}

export default HomeCardcomponent