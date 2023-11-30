import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../assets/notFound.svg';

function NotFound() {
  return (
    <div>
      <img style={{ width: '500px', display: 'block', marginBottom: '25px' }} src={notFound} alt="Not Found" />
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default NotFound;
