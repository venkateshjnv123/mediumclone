import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

function Myposts(){
    const posts = JSON.parse(localStorage.getItem('blogs'));
    const navigate = useNavigate();

    const handleedit = (values) => {
      console.log(values);
      navigate('/add', {state :{values : values}});
    }
    return(<>
    {
    posts ?
     posts.map((blog)=>(
        <div className="md:w-3/5 border-b p-4 mb-4">
        {/* Author Name */}

  
        {/* Content */}
        <div className='flex content-space-between'>
          <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
          <button className='rounded-full bg-slate-400 w-24 h-8' onClick={()=>handleedit(blog)}>edit</button>
        </div>
        <div className="flex flex-wrap gap-2">

               <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full cursor-pointer">
             {blog.categories}
             </div>
      
       
          {/* Add more categories as needed */}
        </div>
  
        {/* Image */}
        <div className="flex justify-center items-center mb-4">
          <div>  <p className="text-gray-700 mb-4 overflow-hidden line-clamp-3">{blog.content}</p>
          <p>Status -<span
      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
        blog.status == "Yes" ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
      }`}
    >
      { blog.status == "Yes" ? 'Completed' : 'Not Completed'}
    </span> </p></div>
      
          <img
            src={blog.featuredImage}
            alt="Placeholder"
            className="w-32 h-32 rounded-md object-cover"
          />
        </div>

        
        {/* Categories */}
        
      </div>

     )) :
     <div>No posts to show here</div>
} 
    </>

    )
}

export default Myposts;