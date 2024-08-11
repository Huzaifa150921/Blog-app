import React, { useRef, useEffect } from 'react';
import "./SignUp.css";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Utils/AuthContext';

const SignUp = () => {
  const navigate = useNavigate();
  const registerForm = useRef(null);
  const { user, registerUser } = useAuth();  // Corrected useAuth usage

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);  // Added navigate to dependency array

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = registerForm.current.name.value;
    const email = registerForm.current.email.value;
    const password1 = registerForm.current.password1.value;
    const password2 = registerForm.current.password2.value;

    if (password1 !== password2) {
      alert('Passwords did not match!');
      return;
    }

    const userInfo = { name, email, password1, password2 };
    registerUser(userInfo);
  };

  return (
    <>
      <div className="sign">
        <div className="sign-content">
            <h3>Sign Up</h3>
            <form ref={registerForm} onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder='Enter Name' required />
              <input type="email" name="email" placeholder='Enter Email' required />
              <input type="password" name="password1" autoComplete="new-password" placeholder='Enter Password' required />
              <input type="password" name="password2" autoComplete="new-password" placeholder='Confirm Password' required />

              <div className="form-help">
                <div className="remember">
                  <input type="checkbox" />
                  <label htmlFor="">Remember Me</label>
                </div>
                <p>Need Help?</p>
              </div>
              
              <button id='btn' type='submit'>Sign Up</button>
            </form>

            <div className="contact">
              <p>Already have an account? <Link to="/logIn">Log In</Link></p>
            </div>  
        </div>
      </div>
    </>
  );
}

export default SignUp;
