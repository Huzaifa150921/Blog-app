import React from 'react'
import "./BlogPage.css"
import BlogCard from '../../Components/BlogCard/BlogCard'
import blogData from "../../BlogData"
import Add from '../../Components/Add/Add'




const BlogPage = () => {

  

  const viewBtnAlert = () => {
    alert("Click on card to view details... ")
  }



  return (
    <>
  <div className="Blog-page">
    <div className="blog-content">
      <div className="blog-top">
      <h3>Page title</h3>

      <div className="span">
      <span>Home</span> <span id='br'>Link one</span>
      </div>

      </div>
      <div className="blog-center">
      <img src="./src/assets/b-1.png" alt="blog-page-imgae-h-1-copy" />
      </div>
      <div className="card-area">
      
    {blogData.map(blog =>(
        <BlogCard key={blog.id} blog={blog}/>
    ))}

      </div>
    </div>
    <div className="universal-btn"  onClick={viewBtnAlert}><button >view more</button></div>

   <Add/>

  </div>
    </>
  )
}

export default BlogPage
