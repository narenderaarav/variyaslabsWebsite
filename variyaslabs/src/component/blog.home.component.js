import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link,useHistory } from "react-router-dom";
const BlogHomeCompnent = ({id, date, description, title, blogImage }) => {
  const history = useHistory();
   const blocakDetail=()=>{
   history.push(`/blog-details/${id}`);
  }
  return (
    <>
      <div className="col-md-4">
        <div className="blogBox">
          <div className="imageBox">
            <img src={process.env.PUBLIC_URL + blogImage} alt="blog" />
            <div className="postDate">{date}</div>
          </div>
          <div className="contentBox">
            <h4>{title}</h4>
            <p>{description} </p>
            <p className="readme">
              <p onClick={()=>blocakDetail()}> Read Me</p>
              <Link to="/">Read me</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHomeCompnent;
