import React, { useState } from 'react';
import Header from './Header';
import Explore from './Explore';
import Banner from './Banner';
import backgroundImage from '../assets/img/background-image.jpeg';  // Add your background image path here

const SignupSignin = () => {
  const [isSignup, setIsSignup] = useState(true);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <>
      <Header />
      <section 
        className='flex flex-col items-center justify-center w-full'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }}
      >
        <div className='bg-white p-8 rounded shadow-md w-full lg:w-1/2 text-center'>
          <h2 
            className='text-[55px] font-normal mb-4' 
            style={{ 
              fontFamily: 'bodoni-urw, serif',
              color: '#2B2B2B'
            }}
          >
            {isSignup ? 'Sign Up' : 'Sign In'}
          </h2>
          {isSignup ? (
            <>
              <input
                type='text'
                placeholder='Full Name'
                className='mb-4 p-2 w-full border rounded'
              />
              <input
                type='email'
                placeholder='Email'
                className='mb-4 p-2 w-full border rounded'
              />
              <input
                type='password'
                placeholder='Password'
                className='mb-4 p-2 w-full border rounded'
              />
              <button className='btn w-full'>Sign Up</button>
            </>
          ) : (
            <>
              <input
                type='email'
                placeholder='Email'
                className='mb-4 p-2 w-full border rounded'
              />
              <input
                type='password'
                placeholder='Password'
                className='mb-4 p-2 w-full border rounded'
              />
              <button className='btn w-full'>Sign In</button>
            </>
          )}
          <p className='mt-4 cursor-pointer text-blue-600' onClick={toggleForm}>
            {isSignup ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
          </p>
        </div>
      </section>
      <Explore />
    </>
  );
};

export default SignupSignin;
