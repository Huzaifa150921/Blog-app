import React, { useEffect, useRef } from 'react';
import "./LogIn.css";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Utils/AuthContext';

const LogIn = () => {
  const navigate = useNavigate();
  const { user, logInUser } = useAuth();  // Corrected useAuth usage

  const loginForm = useRef(null);
 
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);  // Added navigate to dependency array

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;

    const userInfo = { email, password };
    logInUser(userInfo);
  };

  return (
    <>
      <div className="loginPage">
        <div className="logInPage-content">
            <h3>Sign In</h3>

            <form ref={loginForm} onSubmit={handleSubmit}>
              <input type="email" name="email" placeholder='Enter Email' required />
              <input type="password" name="password" placeholder='Enter Password' required />

              <div className="form-help">
                <div className="remember">
                  <input type="checkbox" />
                  <label htmlFor="">Remember Me</label>
                </div>
                <p>Need Help?</p>
              </div>
              
              <button  id='btn' type='submit'>Sign In</button>
            </form>

            <div className="contact">
              <p>New To MetaBlog? <span><Link to="/SignUp">Sign Up</Link></span></p>
            </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
