import React from 'react'
import BlogCard from '../../Components/BlogCard/BlogCard'
import blogData from '../../BlogData'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoArrowBackCircleOutline } from "react-icons/io5";

const useQyery = () =>{
    return new
    URLSearchParams(useLocation().search);
}

const Search = () => {

  {/*MAKING SEARCH COMPONENT TO SHOW SEARCHED DATA ACCORDING TO CATEGORIES*/}

const Query = useQyery();
const navigate = useNavigate();
const searchQuery = Query.get('Query').toLowerCase();

const filteredBlogs = blogData.filter(blog => blog.category.toLowerCase().includes(searchQuery ));

const handleArrowClick = () => {
    navigate(-1);

  };
  return (
    <>
      <div className="search-page ">
      <IoArrowBackCircleOutline size={40} onClick={handleArrowClick}/>
      <h3>{`Search Results for ${searchQuery}`}</h3>
        <div className="search-page-content">
           
            {filteredBlogs.length > 0 ? (
                filteredBlogs.map(blog => <BlogCard key={blog.id} blog={blog} />)):
                (
                   <marquee>/404/ No Result!! check spelling </marquee> 
                )
            }
        </div>
      </div>
    </>
  )
}

export default Search
