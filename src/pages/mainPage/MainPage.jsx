import React from 'react';
import image from '../../assets/hello.png';
import './MainPage.css';

function MainPage() {
  return (
    <>
      <div className='main-body'>
        <div className='navbar'>
          <div className='left-nav'>
            <img src={image} alt='' />
            <span>TaskHive</span>
          </div>
          <div className='mid-nav'>Welcome User</div>
          <div className='right-nav'>
            <a href='/logout/'>
              <button className='btn'>Logout</button>
            </a>
          </div>
        </div>
        <form action='/add-todo/' method='POST'>
          <div className='add-task'>
            <input
              name='title'
              className='task'
              type='text'
              placeholder='Add your task'
            />
            <button className='task-btn'>Add</button>
          </div>
        </form>
        <div className='task-font'>Your Tasks</div>
        <div className='task-list'>
          <div className='task-content'>
            <div className='task-text'>Task 1</div>
            <a href='#'>
              <i
                className='icon fa-solid fa-pen-to-square'
                style={{ color: '#4c489d' }}
              ></i>
            </a>
            <a href='/delete-task/{{task.id}}'>
              <i
                className='icon fa-solid fa-trash'
                style={{ color: '#4c489d' }}
              ></i>
            </a>
          </div>

          <div className='empty-task'>No Tasks Available</div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
