import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import HomeCardComponent from '../Component/HomeCardComponent'
import Card from '../Component/Card'
import SmallCardComponent from '../Component/SmallCardComponent'
import { store } from './Details'
import './Home.css'

const Home = () => {
  const [detail] = useContext(store)
  return (
    <>
      <div className='home_container'>
        <div className='containerfor_3cards'>
          <div className="imgdiv-1">
            <Link to='/Technology'>
              {""}
              <img src="https://images.unsplash.com/photo-1606922342331-061cbb448a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="404_img_notfount" />
            </Link>
          </div>
          <div className='imgdiv-2'>
              <div className="second_card">
                <Link to='/Fitness'>
                  {""}
                  <img src="https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM3fHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="404_img_notfount" />
                </Link>
              </div>
              <div className="third_card">
                <Link to='/Food'> 
                  {""}
                  <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="404_img_notfount" />
                </Link>
              </div>
          </div>
        </div>
        <h1 className='latest-s-head'>Latest Stories</h1>
      <div className='latest-stories-div'>
      <div className="home_left_section">
        {
          detail.filter((art) => {
            return art.category === 'bollywood';
          }).map((p) => (
            <HomeCardComponent 
            key={p.id}
            articleid={p.id}
            imgUrl={p.img}
            title={p.title}
            description={p.description.slice(0,200)}
            author={p.author} />
          ))
        }
      </div>
      <div className="home_left_section">
        {
          detail.filter((art) => {
            return art.category === 'technology';
          }).map((p) => (
            <HomeCardComponent 
            key={p.id}
            articleid={p.id}
            imgUrl={p.img}
            title={p.title}
            description={p.description.slice(0,200)}
            author={p.author} />
          ))
        }
      </div>
      <div className="home_left_section">
        {
          detail.filter((art) => {
            return art.category === 'food';
          }).map((p) => (
            <HomeCardComponent 
            key={p.id}
            articleid={p.id}
            imgUrl={p.img}
            title={p.title}
            description={p.description.slice(0,200)}
            author={p.author} />
          ))
        }
      </div>
      <div className="home_left_section">
        {
          detail.filter((art) => {
            return art.category === 'fitness';
          }).map((p) => (
            <HomeCardComponent 
            key={p.id}
            articleid={p.id}
            imgUrl={p.img}
            title={p.title}
            description={p.description.slice(0,200)}
            author={p.author} />
          ))
        }
      </div>
      </div>
      <div className='latest-articals-div'>
      <div  className="rightbar2">
      <h1>Latest Articals</h1>
      <div className='rightbar-div'>
        {
          detail.filter((art) => {
            return art.category === 'mix';
          }).map((p) => (
            <Card 
            key={p.id}
            articleid={p.id}
            imgUrl={p.img}
            title={p.title}
            description={p.description.slice(0,200)}
            author={p.author} />
          ))
        }
      </div>
      </div>
      <div className="sidebar2">
      <h1>Top Posts</h1>
      <div>
        {
          detail.filter((art) => {
            return art.category === 'mix';
          }).map((p) => (
            <SmallCardComponent 
            key={p.id}
            articleid={p.id}
            imgUrl={p.img}
            title={p.title.slice(0,25)}
            description={p.description.slice(0,200)}
            author={p.author} />
          ))
        }
        <div className='adver'>
          
          <a href="https:/www.prepbytes.com">
            <p>Adversement</p>
            <img src="data:image/png;base64,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" alt="404_img_notfound"/>
            <p>Start your journey of success
              Personalised Coding Programs to make coding easier for you
              Want to know how PrepBytes can help you?</p>
              <div><button>Cilck Here</button></div>
          </a>
          
        </div>
      </div>
      </div>
      </div>
      <h1>Latest Stories</h1>
      <div className='home-stories-footer'>
      <div className="home_left">
        {
          detail.filter((art) => {
            return art.category === 'footer1';
          }).map((p) => (
            <HomeCardComponent 
            key={p.id}
            articleid={p.id}
            imgUrl={p.img}
            title={p.title}
            description={p.description.slice(0,200)}
            author={p.author} />
          ))
        }
      </div>
      <div className="home_left">
        {
          detail.filter((art) => {
            return art.category === 'footer2';
          }).map((p) => (
            <HomeCardComponent 
            key={p.id}
            articleid={p.id}
            imgUrl={p.img}
            title={p.title}
            description={p.description.slice(0,200)}
            author={p.author} />
          ))
        }
      </div>
      <div className="home_left">
        {
          detail.filter((art) => {
            return art.category === 'footer3';
          }).map((p) => (
            <HomeCardComponent 
            key={p.id}
            articleid={p.id}
            imgUrl={p.img}
            title={p.title}
            description={p.description.slice(0,200)}
            author={p.author} />
          ))
        }
      </div>
      </div>
      </div>
      

    </>
  )
}

export default Home