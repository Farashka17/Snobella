import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:3001/users', {
        params: { email, password },
      });

      if (response.data.length > 0) {
        // Kullanıcı bulundu, giriş başarılı
        alert('Login successful!');
        // Giriş sonrası yönlendirme (örneğin anasayfa)
        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
    }

}

  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-[128px] mb-[148px]'>
        <button className='py-[9px] px-[71px] border border-[#B6B7BC] rounded-[4px] flex items-center justify-center flex-row gap-2'>
          <p className='text-[14px] font-medium text-[#5C5F6A]'>Continue with Google</p>
        </button>

        <div className='flex flex-row'>
          <div className='border-[#E6E7E8] border mt-[40px] w-[136px] h-0 '></div>
          <h1 className='text-[12px] text-[#5C5F6A] font-medium my-8 mx-4'>OR</h1>
          <div className='border-[#E6E7E8] border mt-[40px] w-[136px] h-0 '></div>
        </div>

        {/* Form */}
        <form className='flex flex-col w-[320px]' onSubmit={handleLogin}>
          <label htmlFor="email" className='text-[14px] font-medium text-[#474B57] text-start'>Email</label>
          <input
            type="email"
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='py-[10px] px-[15px] mb-[15px] w-full border border-[#E6E7E8] rounded-[6px]'
          />

          <label htmlFor="password" className='text-[14px] font-medium text-[#474B57] text-start'>Password</label>
          <input
            type="password"
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='py-[10px] px-[15px] mb-[15px] w-full border border-[#E6E7E8] rounded-[6px]'
          />

          <button className='text-[12px] text-[#474B57] font-medium text-end mb-6'>Forgot Password?</button>

          <div>
            <button className='bg-[#0E1422] py-3 px-6 w-full justify-center items-center gap-[6px] text-[#FFFFFF] text-[14px] hover:bg-[#0075ff] font-medium rounded-[4px] flex'>
              Login
            </button>
          </div>
        </form>

        <Link to="/register">
          <button className='text-[14px] font-normal text-[#5C5F6A] mt-6 text-center'>Don't have an account? Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
