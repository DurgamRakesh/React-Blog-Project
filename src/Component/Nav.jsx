import React from 'react'
import {NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  
  return (
    <div>
        <div className='navbar' >
            <ul>
                <li><NavLink className={({isactive}) => (isactive ? 'active' : 'notactive')} to='/'>Home</NavLink></li>
                <li><NavLink className={({isactive}) => (isactive ? 'active' : 'notactive')} to='/Bollywood'>Bollywood</NavLink></li>
                <li><NavLink className={({isactive}) => (isactive ? 'active' : 'notactive')} to='/Technology'>Technology</NavLink></li>
                <li><NavLink className={({isactive}) => (isactive ? 'active' : 'notactive')} to='/Hollywood'>Hollywood</NavLink></li>
                <li><NavLink className={({isactive}) => (isactive ? 'active' : 'notactive')} to='/Fitness'>Fitness</NavLink></li>
                <li><NavLink className={({isactive}) => (isactive ? 'active' : 'notactive')} to='/Food'>Food</NavLink></li>
            </ul>
            
        </div>
        
    </div>
  )
}

export default Nav