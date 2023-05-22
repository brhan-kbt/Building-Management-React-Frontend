import React, { useState } from 'react'
import { Email, Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterUserMutation } from '../state/api';
import { setLoggedInUserId } from '../state';

const Register = () => {
  const router=useNavigate();
  const pricing = useSelector((state) => state.global.pricing);
  const [registerUser] = useRegisterUserMutation();
  const dispatch = useDispatch();

  console.log(pricing);

  // if(!pricing){
  //   router('/pricing')
  // }
  
  const [formData, setFormData] = useState({
    email: '',
    username:'',
    firstName:'',
    lastName:'',
    password: '',
    phoneNumber: '',
    role: 'admin',
    pricingPlan:pricing,
  });

  const [errors,setErrors]=useState('');


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const request = registerUser(formData);
    request
      .unwrap()
      .then((data) => {
        console.log(data);
        dispatch(setLoggedInUserId(data.newUser._id));
        localStorage.setItem('nodetoken',data.token);
        router('/dashboard')
      })
      .catch((error) => {
        console.error("Failed to edit/create user:", error);
      });
    // console.log(formData);
    // axios.post('http://localhost:5000/general/users', formData)
    // .then(response => {
    //   localStorage.setItem('nodetoken',response.data.token);
    //   console.log(response);
    //   router('/dashboard')
    // })
    // .catch(error => {
    //   if(error && error.response){
    //     setErrors(error.response.data);
    //     }
    //     console.log(error.response.data);
    // });
  };
  return (
    <>
    <section  className='bg-white text-dark'>
    <Navbar/>
      <section className="my-16 mx-16">
      <div className="h-full">
        <div
          className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div
            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              srcSet="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image" />
          </div>

          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={handleSubmit}>
              <div
                className="flex flex-row items-center justify-center ">
                <p className="mb-0 mr-4 text-lg">Sign in with</p>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mx-1 h-9 w-9 rounded-full   border border-secondary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-secondary hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-secondary focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                 <Email className='text-secondary hover:text-white'/>
                </button>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mx-1 h-9 w-9 rounded-full  border border-secondary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-secondary hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-secondary focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                 <Facebook className='text-secondary hover:text-white'/>
                </button>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mx-1 h-9 w-9 rounded-full  border border-secondary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-secondary hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-secondary focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                 <Twitter className='text-secondary hover:text-white'/>
                </button>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mx-1 h-9 w-9 rounded-full border border-secondary  uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-secondary hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-secondary focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                  <LinkedIn className='text-secondary hover:text-white'/>
                </button>
              </div>

              <div
                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p
                  className="mx-4 mb-0 text-center font-semibold ">
                  Or
                </p>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="space-y-6">

                {/* <div className='flex-row md:flex   md:space-x-3'> */}
                  <div >
                      <div className='flex-row md:flex gap-5 my-3'>
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                        First Name
                        </label>
                        <div className="mt-2">
                          <input
                            id="name"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            autoComplete="firstName"
                            
                            className="block w-full rounded-md focus:border-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                          />
                          {  errors.firstName &&
                            <small className='font-bold text-red'>{errors.firstName}</small>
                            }
                        </div>
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                          Last Name
                        </label>
                        <div className="mt-2">
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            autoComplete="lastName"
                            
                            className="block w-full rounded-md focus:border-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                          />
                          {  errors.lastName &&
                            <small className='font-bold text-red'>{errors.lastName}</small>
                            }
                        </div>
                      </div>
                    </div>

                    <div className='flex-row md:flex gap-5 my-3'>
                      <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                        User Name
                        </label>
                        <div className="mt-2">
                          <input
                            id="username"
                            name="username"
                            type="text"
                            value={formData.username}
                            onChange={handleChange}
                            autoComplete="username"
                            
                            className="block w-full rounded-md focus:border-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                          />
                          {  errors.username &&
                            <small className='font-bold text-red'>{errors.username}</small>
                            }
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
                          Phone Number
                          </label>
                          <div className="mt-2">
                            <input
                              id="phoneNumber"
                              name="phoneNumber"
                              type="text"
                              value={formData.phoneNumber}
                              onChange={handleChange}
                              autoComplete="phoneNumber"
                              
                              className="block w-full rounded-md focus:border-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                            />
                            {  errors.phoneNumber &&
                              <small className='font-bold text-red'>{errors.phoneNumber}</small>
                              }
                          </div>
                      </div>
                    </div>
                    


                    
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      
                      className="block w-full rounded-md focus:border-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                    />
                    {  errors.email &&
                        <small className='font-bold text-red'>{errors.email}</small>
                        }
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      
                      className="block w-full rounded-md focus:border-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:border-2 sm:text-sm sm:leading-6"
                    />
                    {  errors.password &&
                        <small className='font-bold text-red'>{errors.password}</small>
                        }
                  </div>
                 
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              <p className="mt-10 text-center text-sm text-gray-500">
              Have an account?{' '}
                <Link to='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Login here
                </Link>
              </p>
            </div>
             
            </form>
          </div>
        </div>
      </div>
      </section>
    <Footer/>
    </section>
    </>
  )
}

export default Register