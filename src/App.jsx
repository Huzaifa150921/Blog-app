import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import BlogPage from "./Pages/BlogPage/BlogPage.jsx";
import BlogCate from "./Pages/BlogCate/BlogCate.jsx";
import {Routes, Route} from "react-router-dom"
import Search from "./Pages/Search/Search.jsx";
import AuthorPage from "./Pages/AuthorPage/AuthorPage.jsx";
import SinglePostPage from "./Pages/SinglePost/SinglePostPage.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import LogIn from "./Pages/loggIn/LogIn.jsx";
import Author from "./Pages/Author/Author.jsx";
import AddBlog from "./Pages/Addblog/AddBlog.jsx";
import PrivateRoutes from "./Utils/PrivateRoute.jsx";
import { AuthProvider } from "./Utils/AuthContext.jsx";
import { databases } from "./AppwriteConfig.js";
import Contact from "./Pages/Contact/Contact.jsx";

function App() {
  
  const [blogs, setBlogs] = useState([]); // State for storing blogs

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await databases.listDocuments('66b4b960001e0921e718', '66b7732d0015a8c5fb36');
        setBlogs(response.documents);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        alert('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <>
<AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage blogs={blogs} />} /> {/* Pass blogs to HomePage */}
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Contact" element={<Contact />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/BlogPage" element={<BlogPage blogs={blogs} />} /> {/* Pass blogs to BlogPage */}
            <Route path="/category/:category" element={<BlogCate blogs={blogs} />} /> {/* Pass blogs to BlogCate */}
            <Route path="/search" element={<Search blogs={blogs} />} /> {/* Pass blogs to Search */}
            <Route path="/blog/:id" element={<SinglePostPage blogs={blogs} />} /> {/* Single post route */}
            <Route path="/author/:author" element={<AuthorPage blogs={blogs} />} /> {/* Pass blogs to AuthorPage */}
            <Route path="/Author" element={<Author blogs={blogs} />} /> {/* Pass blogs to Author */}
            <Route path="/Addblog" element={<AddBlog />} />
          <Route path="/Contact" element={<Contact />} />

          </Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
