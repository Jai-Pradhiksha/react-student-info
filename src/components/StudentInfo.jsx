import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentInfo.css'

const StudentInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className=" min-vw-100 position-relative min-vh-100 d-flex justify-content-center align-items-center animate-bgChange">
      <div className="card p-4 shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-3">Name: Jai Pradhiksha</h1>
        <p className="text-gray-600 mb-3">Registration No: 123456</p>
        <button
          onClick={toggleVisibility}
          className="btn btn-primary rounded-pill px-4 mb-3"
        >
          {isVisible ? 'Hide Details' : 'Show Details'}
        </button>
        {isVisible && (
          <div className="text-gray-700">
            Saveetha Engineering College...
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentInfo;
