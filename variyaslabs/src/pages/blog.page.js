import React from 'react'
import BlogHomeCompnent from '../component/blog.home.component'
import dataBlogs from '../configAPI/blogs'

const Blogpage = () =>{
  return(
   <>
    
    <div className="innerBanner">Blogs</div>
    <div className="container">
      <div className="main">
        <div className="row">
        {
            dataBlogs.map((item, index) =>{
             
              return(index>2?<BlogHomeCompnent
              key={index}
              date={item.date}
              blogImage={item.blogImage}
              title={item.title}
              description={item.description}
            /> :null
            )})
          }
        </div>
      </div>
    </div>
   </>
  )
}

export default Blogpage