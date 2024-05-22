import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <div class='container'>
        <div class='screen'>
          <div class='screen__content'>
            <form class='login' method='post'>
              <div class='login__field'>
                <i class='login__icon fas fa-user'></i>
                <input
                  required
                  name='username'
                  type='text'
                  class='login__input'
                  placeholder='Username'
                />
              </div>
              <div class='login__field'>
                <i class='login__icon fas fa-lock'></i>
                <input
                  required
                  name='password'
                  type='password'
                  class='login__input'
                  placeholder='Password'
                />
              </div>
              <button class='button login__submit'>
                <span class='button__text'>Log In Now</span>
                <i class='button__icon fas fa-chevron-right'></i>
              </button>
            </form>
            <div class='social-login'>
              <h5>Not Registered?</h5>
              <Link to='/register'>Signup Here</Link>
            </div>
          </div>
          <div class='screen__background'>
            <span class='screen__background__shape screen__background__shape4'></span>
            <span class='screen__background__shape screen__background__shape3'></span>
            <span class='screen__background__shape screen__background__shape2'></span>
            <span class='screen__background__shape screen__background__shape1'></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
