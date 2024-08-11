import React from 'react'
import "./Navbar.css"
import {Link, useNavigate } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import { useAuth } from '../../Utils/AuthContext'



const Navbar = () => {


{/* SEARCH BY CATEGORY FUNCTIONALITY */}
{/*NAVIGATION BAR ACCORDING TO PRIVATE ROUTING*/ }

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();


  const { user, logOutUser } = useAuth();  

  
 

  const handleSearchChange = (e) => {
            setSearchQuery(e.target.value);
  }
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();

        if(searchQuery.trim() === '') return;
            navigate(`/search?type=category&Query=${searchQuery}`);
            setSearchQuery('')

  };

   {/* making a transition on search bar */ }

   const [isActive, setIsActive] = useState(false);
   const toggleActive = () => {
     setIsActive(!isActive);
   };
  
  return (
    <>
      <div className="navbar ">
            <div className="logo">
              <img src="./src/assets/Logo.png" alt="blog-page-logo-img-1" />
            </div>
{/* UPDATED NAVBAR ACCORDING TO AUTHENTICATION BY TIRNARY OPERATORS  */ }
        <div className="nav-left">
      
          <ul>
            
            {user ? 
            (
            <>
          <li><Link to={"/BlogPage"} >Blog</Link></li>
          <li><Link to={"/author"}>Authors</Link></li>
          <li><Link to={"/Addblog"}>Add Blog</Link></li>
          <li><Link>Account</Link></li>
          <li><Link to={"/Contact"}>Contact</Link></li>
          </>
          ):(
            <>
            <li><Link to={"/"} >Home</Link></li>
            <li><Link to={"/Contact"}>Contact</Link></li>
            <li><Link>About</Link></li>
            <li><Link to="/LogIn">Register</Link></li>
            

            </>
          )}
         

          </ul>
         
        </div>

        <div className="nav-right">
   {/* making a transition on search bar */ }

      <div className={`search ${isActive ? 'active' : ''}`}>

   {/* search bar for filtered data !!!! search according to categories!!!! */ }

          <input type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by Category" 
          onClick={toggleActive}  ></input> 

          <button  onClick={handleSearchSubmit}> 

          <CiSearch size={20}  /> { /*icon*/}

          </button>
          
      </div>
      <button id='button' onClick={logOutUser}>Sign out</button>

          
   {/* theme change switch  !!!! functionality addition expexcted !!!! CONTEXT API */ }
   {/* making switch to display none  on search bar transition.... */ }

         <img src="./src/assets/Swich.png" alt="fake-switch-dev-prac-1" className={`side-image ${isActive ? 'hidden' : ''}`} />
          
        </div>
      </div>
    </>
  )
}

export default Navbar
