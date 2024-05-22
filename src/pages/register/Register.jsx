import React from 'react';
import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import { server } from '../../App.jsx';
import toast from 'react-hot-toast';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/users/register`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className='container'>
        <div className='screen'>
          <div className='screen__content'>
            <form className='login' onSubmit={submitHandler}>
              <div className='login__field'>
                <i className='login__icon fas fa-user'></i>
                <input
                  required
                  name='username'
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='login__input'
                  placeholder='Username'
                />
              </div>
              <div className='login__field'>
                <i className='login__icon fas fa-lock'></i>
                <input
                  required
                  name='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='login__input'
                  placeholder='Email'
                />
              </div>
              <div className='login__field'>
                <i className='login__icon fas fa-lock'></i>
                <input
                  required
                  name='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='login__input'
                  placeholder='Password'
                />
              </div>
              <button className='button login__submit'>
                <span className='button__text'>Register Now</span>
                <i className='button__icon fas fa-chevron-right'></i>
              </button>
            </form>
            <div className='social-login'>
              <h5>Already Registered?</h5>
              <a href='/'>Login Now</a>
            </div>
          </div>
          <div className='screen__background'>
            <span className='screen__background__shape screen__background__shape4'></span>
            <span className='screen__background__shape screen__background__shape3'></span>
            <span className='screen__background__shape screen__background__shape2'></span>
            <span className='screen__background__shape screen__background__shape1'></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
