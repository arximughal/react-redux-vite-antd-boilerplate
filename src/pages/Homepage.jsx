import React from 'react';
import { Link } from 'react-router-dom';
import { FloatButton } from 'antd';

function Homepage() {
  const handleDocsClick = (e) => {
    e.preventDefault();
    alert('Coming Soon!');
  };

  return (
    <div>
      <h1>
        Welcome to
        {' '}
        <em>
          <strong>
            <Link to="https://arslanaslam.me">react-redux-boilerplate</Link>
          </strong>
        </em>
      </h1>
      <Link to="/login">Login</Link>
      {' / '}
      <Link to="/register">Register</Link>
      <FloatButton onClick={handleDocsClick} tooltip={<p>Read Docs</p>} />
    </div>
  );
}

export default Homepage;
