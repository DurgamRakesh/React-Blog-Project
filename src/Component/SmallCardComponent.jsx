import React from 'react'
import { Link } from 'react-router-dom'

const SmallCardComponent = (props) => {
    const {imgUrl,title,description,articleid} = props;
  return (
    <Link state={{
        title:title,
        description:description,
        img: imgUrl,
        id:articleid
    }} to={`${articleid}`}>
    <div>
        <div>
            <div>
                <img src={imgUrl} alt="404_img_notfound" />
            </div>
            <div>
               <h3>{title}</h3>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default SmallCardComponent