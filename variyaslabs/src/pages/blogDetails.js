import React from 'react'
import BlogHomeCompnent from '../component/blog.home.component'
import dataBlogs from '../configAPI/blogs'

const BlogDetails = (props) =>{
 
  console.log(JSON.stringify(props.match.params))
  return(
   <>
    
    <div className="innerBanner">Blogs Details</div>
    <div className="container">
      <div className="main">
      {JSON.stringify(dataBlogs[props.match.params.id])}
      </div>
    </div>
   </>
  )
}

export default BlogDetails