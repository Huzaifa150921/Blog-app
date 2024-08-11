import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AddBlog.css";

const AddBlog = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [authorImage, setAuthorImage] = useState('');
  const [category, setCategory] = useState('General');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBlog = {
      title,
      content,
      image,
      author,
      Authorimage: authorImage,
      category,
      info: new Date().toLocaleDateString(),  // Example: store the date
    };

    await addNewBlog(newBlog);
    navigate('/');      // Navigate back to the homepage after adding the blog
  };
  const addNewBlog = async (newBlog) => {
    try {
      const response = await databases.createDocument(
        '66b4b960001e0921e718',
        '66b7732d0015a8c5fb36',
        newBlog
      );
      setBlogs([response, ...blogs]); // Add the new blog to the beginning of the list
    } catch (error) {
      console.error('Error adding new blog:', error);
      alert('Error adding new blog:', error);
    }
  };
  
  return (
    <div className="add-blog-page">
      <div className="add-blog-content">
        <form className="add-blog-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Blog Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Author Image URL"
            value={authorImage}
            onChange={(e) => setAuthorImage(e.target.value)}
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <button type="submit">Add Blog</button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;


