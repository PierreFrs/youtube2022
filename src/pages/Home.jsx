import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cupiditate laudantium quidem, sit consequuntur ipsum? Molestiae, alias! Amet ea beatae blanditiis repudiandae fugit laboriosam velit, suscipit officia fugiat culpa alias?",
      img: "https://images.pexels.com/photos/6988658/pexels-photo-6988658.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cupiditate laudantium quidem, sit consequuntur ipsum? Molestiae, alias! Amet ea beatae blanditiis repudiandae fugit laboriosam velit, suscipit officia fugiat culpa alias?",
      img: "https://images.pexels.com/photos/6988658/pexels-photo-6988658.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cupiditate laudantium quidem, sit consequuntur ipsum? Molestiae, alias! Amet ea beatae blanditiis repudiandae fugit laboriosam velit, suscipit officia fugiat culpa alias?",
      img: "https://images.pexels.com/photos/6988658/pexels-photo-6988658.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
  ];

  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={ post.id }>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={'/post/${post.id'}>
              <h1>{post.title}</h1>
              </Link>
              <p className="desc">{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home