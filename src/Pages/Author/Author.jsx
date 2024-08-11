import React from 'react';
import "./Author.css";
import Slider from 'react-slick';
import blogData from "../../BlogData";
import { Link } from 'react-router-dom';
import Add from '../../Components/Add/Add';

const Author = () => {

    const settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
          
            <div className="author-detail">
          
                <div className="author-cards">
                    <Slider {...settings}>
                        {blogData.map(blog => (
                            <div className="author-card-top" key={blog.id}>
                                <div className="img-div">
                                    <img src={blog.Authorimage} alt={blog.author} />
                                </div>
                                <div className="data">
                                <Link to={`/author/${blog.author}`}><h3>{blog.author}</h3></Link> 
                                <Link to={`/category/${blog.category}`}> <h4 id='blue'>{blog.category}</h4></Link>       
                                    <p>{blog.authorInfo}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <Add/>
            </div>
        </>
    );
}

export default Author;
