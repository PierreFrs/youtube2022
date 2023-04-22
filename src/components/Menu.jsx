import React from 'react'

const Menu = () => {

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
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post => (
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu