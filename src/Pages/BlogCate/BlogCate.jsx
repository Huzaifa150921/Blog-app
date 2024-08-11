import React from 'react'
import "./BlogCate.css"
import { useParams, useNavigate } from 'react-router-dom';
import blogData from '../../BlogData';
import BlogCard from '../../Components/BlogCard/BlogCard';
import {useEffect, useState, } from "react"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Add from '../../Components/Add/Add'

 
const BlogCate = () => {

  const { category } = useParams();
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const navigate = useNavigate();

   {/* filter after rendering*/ }

  useEffect(() => {
    const filtered = blogData.filter(blog => blog.category === category);  {/* filter througgh a blog-prop in blogCard component*/ }
    setFilteredBlogs(filtered);
  }, [category]);
           
   {/* navigating to back on page back through an icon*/ }
   
  const handleArrowClick = () => {
    navigate(-1);
  };


  return (
    <>
      <div className="blog-category-page">
     
        <div className="blog-category-page-content">
        <IoArrowBackCircleOutline size={40} onClick={handleArrowClick}/>
        <div className="img">
        <img src="/src/assets/b-1.png" alt="Category Header" />
        </div>
        <div className="cate-heads">
                <h3>Blogs in {category}</h3>
            </div>
          <div className="cate-con">
            {/* filtering blog data according to categories*/ }
            {filteredBlogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
</div>
<div className="universal-btn"><button >view more</button></div>
<Add/>
        </div>
      </div>
    </>
  )
}

export default BlogCate
