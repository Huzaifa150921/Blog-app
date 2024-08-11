import React from 'react'
import "./AuthorPage.css"
import Add from '../../Components/Add/Add'
import blogData from '../../BlogData';
import BlogCard from '../../Components/BlogCard/BlogCard';
import { useParams } from 'react-router-dom';


const AuthorPage = () => {
  
  const { author } = useParams();
  const authorBlogs = blogData.filter(blog => blog.author === author);

  return (
    <>
      <div className="Author-page">
        <marquee  >This is Author page (filtered by name)</marquee>
        <div className="author-content">
       

        <div className="img">
          <div className="img-data">
        <img src={"/src/assets/image.png"} alt="" />
        <div className="p">
        <p>{author}</p>
        <p>Collaborator & Editor</p>
        </div>
        </div>
        <p id="info">Meet  {author}, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives .</p>
          <img src="/src/assets/Social Media.png" alt="" /> 
</div>
        <div className="author-heads">
                <h3>Posts by {author}</h3>
            </div>
          <div className="author-con">

            {authorBlogs.length > 0 ? (
          authorBlogs.map(blog => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <p>No blogs found by {author}</p>
        )}
</div>

<div className="universal-btn"><button >view more</button></div>
<Add/>
        </div>
        </div>
     
    </>
  )
}

export default AuthorPage
