import React from 'react'
import { Link } from 'react-router-dom'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/16407235/pexels-photo-16407235.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/16407235/pexels-photo-16407235.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted two days ago</p>
          </div>
          <div className="edit">
            <Link to={'/write?edit=2'}>
              <img src={ Edit } alt="" />
            </Link>
            
            <img src={ Delete } alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic error incidunt molestias eum laboriosam reprehenderit distinctio recusandae tempora eos fuga dolor aspernatur earum, quis asperiores quas natus nulla modi totam!</p>
      </div>
      
      <Menu />
    </div>
  )
}

export default Single