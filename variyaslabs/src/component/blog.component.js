import React from 'react'
import BlogHomeCompnent from './blog.home.component'
import dataBlogs from '../configAPI/blogs'
const Blog = () => {
  return(
    <div className="main">
      <div className="container">
      <div className="heading"><h1>Blogs</h1></div>
        <div className="row">
          {
          Array.from({length:3},(item, index) =>{
              return(<BlogHomeCompnent
              key={index}
              id={index}
              date={dataBlogs[index].date}
              blogImage={dataBlogs[index].blogImage}
              title={dataBlogs[index].title}
              description={dataBlogs[index].description}
            /> 
            )})
          }
        </div>
      </div>
    </div>
  )
}

export default Blog;