import React from 'react'
import "./SinglePostPage.css"
import blogData from "../../BlogData"
import { useParams} from 'react-router-dom';



const SinglePostPage = () => {

  const {id} = useParams();
  const blog = blogData.find(blog => blog.id === parseInt(id));

if (!blog) {
  return <marquee>Blog Post Not Found</marquee>
}
  return (
    <>
  <div className="single-post-page">
    <div className="single-post-contant">
    <div className="single-post-overlay">
           <span>{blog.category}</span>
            <h2>The Impact of {blog.category} on the Workplace: How {blog.category} is Changing:</h2>
            <div className='over-end'>
              <img src={blog.image} alt="img" />
              <p>{blog.author}</p>
              <p>{blog.info}</p>
            </div>
          </div>
      <div className="post-top">
        <img src="/src/assets/s-1.png" alt="" />
        
        <p>{blog.detailedInfo}</p>
        <br/>
        <p>{blog.detailedInfos}</p>
        <h3>{blog.detailedHead}</h3>
        <p>{blog.detailedInfo}</p>
        <br/>
        <p>Lorem ipsum dolor {blog.category}, consectetur adipisicing elit. Sapiente, consequatur fugit blanditiis mollitia placeat voluptatibus ab? Vero atque accusamus natus?</p>
        <h3>{blog.detailedHead2}</h3>
        <p>{blog.detailedInfo}</p>
        <br/>
        <p>Lorem ipsum dolor sit amet,{blog.category} adipisicing elit. Sapiente, consequatur fugit blanditiis mollitia placeat voluptatibus ab? Vero atque accusamus natus?</p>
      </div>
<div className="central-box">
<p>“ {blog.category} can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. ”</p>
</div>


      <div className="post-bottom">
      <img src="/src/assets/s-2.png" alt="" />
      <div className="add-box2">
        <div className="add-con2">
        <p>Advertisement</p>
        <h3>You Can Display Add</h3>
    <p>750 x 1000</p>
    </div>
      </div>
        <h3>{blog.detailedHead3}</h3>
        <p>Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.</p>
        <h3>{blog.detailedHead4}</h3>
        <p>{blog.category} can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.</p>
        <h3>{blog.detailedHead5}</h3>
        <p>Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.</p>
        <h3>{blog.detailedHead6}</h3>
        <p>{blog.category} is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.</p>
      </div>
    </div>
  </div>
    </>
  )
}

export default SinglePostPage
