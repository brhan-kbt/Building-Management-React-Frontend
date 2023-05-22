import { ArrowForward, ChevronRight, Star, StarBorder, StarHalf } from '@mui/icons-material';
import React from 'react'
import logo from '../assets/Frame.svg'
import { BugIcon, FullCheck, PressIcon, QouteIcon, SalesIcon, SupportIcon } from '../frontpages/icons/icons.jsx';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';

const Home = () => {

  return (
    <>
    <section className='bg-white text-dark'>
      <Navbar/>
        {/* hero section */}

        <section className='flex items-center'>
        <div className='flex flex-col gap-16 md:flex-row mx-16 my-12'>
            <div className='w-full text-center md:text-start md:w-1/2 flex flex-col space-y-8 md:-mt-16  justify-center'>
                <h2 className='text-4xl'>Revolutionary Property<span className='text-3xl font-bold'> Management Platform</span> </h2>
                <p className='text-xl md:text-medium'> 
                Streamline property management with our user-friendly platform. From rent collection to maintenance requests, our cutting-edge technology simplifies every aspect of property management. Enjoy seamless efficiency with just a few clicks                </p>
                
                <a
                  href="#"
                  className="flex md:w-1/3 text-sm justify-between px-4 py-4 items-center leading-none border rounded text-white bg-primary hover:bg-secondary mt-4 md:mt-0 font-semibold"
                >
                  Watch Demo
                  <div className="flex items-center ml-2">
                    <ArrowForward/>
                  </div>
                </a>
            </div>
            <div className='mt-6 md:mt-0 w-full md:w-1/2'>
            <img src={logo} alt="" className="object-cover w-full h-full" />
            </div>
        </div>
        </section>

        <div className="container my-24 px-28 mx-auto">
          <section className="mb-32 text-gray-800">
            <div className="flex justify-center">
              <div className="text-center max-w-[700px]">
                <p className="uppercase text-blue-600 font-bold mb-6">Features</p>
                <h2 className="text-3xl font-bold mb-6">Why is it so great?</h2>
                <p className="text-gray-500 mb-12">
                  Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque iaculis malesuada.
                  Aenean gravida magna orci, non efficitur est porta id. Donec magna diam.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-12">
              <div className="mb-12">
                <div className="flex">
                  <div className="shrink-0 mt-1">
                    <FullCheck className="w-4 h-4 text-primary"/>
                  </div>
                  <div className="grow ml-4">
                    <p className="font-bold mb-1">Support 24/7</p>
                    <p className="text-gray-500">Pellentesque mollis, metus nec fringilla aliquam</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="flex">
                  <div className="shrink-0 mt-1">
                    <FullCheck className="w-4 h-4 text-primary"/>
                  </div>
                  <div className="grow ml-4">
                    <p className="font-bold mb-1">Tracking</p>
                    <p className="text-gray-500">Magna lacus iaculis elit, quis pharetra varius.</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="flex">
                  <div className="shrink-0 mt-1">
                    <FullCheck className="w-4 h-4 text-primary"/>
                  </div>
                  <div className="grow ml-4">
                    <p className="font-bold mb-1">Reporting</p>
                    <p className="text-gray-500">Pellentesque varius ex vel consequat quis.</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="flex">
                  <div className="shrink-0 mt-1">
                    <FullCheck className="w-4 h-4 text-primary"/>
                  </div>
                  <div className="grow ml-4">
                    <p className="font-bold mb-1">Analytics</p>
                    <p className="text-gray-500">Vestibulum gravida iaculis nisl, vel lobortis eros.</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="flex">
                  <div className="shrink-0 mt-1">
                  <FullCheck className="w-4 h-4 text-primary"/>
                  </div>
                  <div className="grow ml-4">
                    <p className="font-bold mb-1">Huge community</p>
                    <p className="text-gray-500">Praesent vulputate lacus bibendum augue .</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="flex">
                  <div className="shrink-0 mt-1">
                  <FullCheck className="w-4 h-4 text-primary"/>
                  </div>
                  <div className="grow ml-4">
                    <p className="font-bold mb-1">Easy to use</p>
                    <p className="text-gray-500">Sed mauris ex, imperdiet sit amet nisl ac, ultrices.</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="flex">
                  <div className="shrink-0 mt-1">
                    <FullCheck className="w-4 h-4 text-primary"/>
                  </div>
                  <div className="grow ml-4">
                    <p className="font-bold mb-1">Frequent updates</p>
                    <p className="text-gray-500">Aenean lectus ex, placerat id tellus in eros.</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="flex">
                  <div className="shrink-0 mt-1">
                    <FullCheck className="w-4 h-4 text-primary"/>
                  </div>
                  <div className="grow ml-4">
                    <p className="font-bold mb-1">Responsive</p>
                    <p className="text-gray-500">Donec consequat orci quis volutpat imperdiet.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

<div class="container my-24 px-6 mx-auto">

  <section class="mb-32 text-gray-800 text-center">

    <h2 class="text-3xl font-bold mb-12">Testimonials</h2>

    <div class="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
      <div class="mb-12 md:mb-0">
        <div class="flex justify-center mb-6">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-full shadow-lg w-32" />
        </div>
        <h5 class="text-lg font-bold mb-4">Maria Smantha</h5>
        <h6 class="font-medium text-blue-600 mb-4">Web Developer</h6>
        <p class="mb-4">
          <QouteIcon/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
          tenetur quae quaerat ad velit ab hic tenetur.
        </p>
        <ul class="flex justify-center mb-0">
         <li className='text-secondary'><Star/></li>
         <li className='text-secondary'><Star/></li>
         <li className='text-secondary'><Star/></li>
         <li className='text-secondary'><Star/></li>
         <li className='text-secondary'><StarHalf/></li>
        </ul>
      </div>
      <div class="mb-12 md:mb-0">
        <div class="flex justify-center mb-6">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg" class="rounded-full shadow-lg w-32" />
        </div>
        <h5 class="text-lg font-bold text-primary">Lisa Cudrow</h5>
      <h6 class="font-medium text-blue-600 mb-4 text-tertiary">Graphic Designer</h6>
        <p class="mb-4">
          <QouteIcon/>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid commodi.
        </p>
        <ul class="flex justify-center mb-0">
         <li className='text-secondary'><Star/></li>
         <li className='text-secondary'><Star/></li>
         <li className='text-secondary'><Star/></li>
         <li className='text-secondary'><Star/></li>
         <li className='text-secondary'><Star/></li>
        </ul>
      </div>
      <div class="mb-0">
        <div class="flex justify-center mb-6">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" class="rounded-full shadow-lg w-32" />
        </div>
        <h5 class="text-lg font-bold text-primary">John Smith</h5>
        <h6 class="font-medium text-blue-600 mb-4 text-tertiary">Marketing Specialist</h6>
        <p class="mb-4">
         <QouteIcon/>
         At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti.
        </p>
        <ul class="flex justify-center mb-0">
          <li className='text-secondary'><Star/></li>
          <li className='text-secondary'><Star/></li>
          <li className='text-secondary'><Star/></li>
          <li className='text-secondary'><Star/></li>
          <li className='text-secondary'><StarHalf/></li>
        </ul>
      </div>
    </div>

  </section>

</div>
       
      <div class="container mt-24 mx-auto">

        <section class=" text-gray-800">
          <div class="block shadow-lg ">
          <div className="flex justify-center">
                    <div className="text-center max-w-[700px] pt-16">
                      <p className="uppercase text-blue-600 font-bold mb-6">Contact</p>
                      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                    </div>
                  </div>
            <div class="flex flex-wrap items-center">
              <div class="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                <div class="map-container-2 w-full h-[350px]">
                  <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
              <div class="flex justify-center items-center grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12 bg-I h-[350px]">
                <div class="flex flex-wrap lg:pt-0">
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-white rounded-md shadow-md shadow-secondary w-14 h-14 flex items-center justify-center">
                        <SupportIcon/>
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">Technical support</p>
                        <p class="text-gray-500">support@example.com</p>
                        <p class="text-gray-500">+1 234-567-89</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-white rounded-md shadow-md shadow-secondary  w-14 h-14 flex items-center justify-center">
                        <SalesIcon/>
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">Sales questions</p>
                        <p class="text-gray-500">sales@example.com</p>
                        <p class="text-gray-500">+1 234-567-89</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                    <div class="flex align-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-white rounded-md shadow-md shadow-secondary  w-14 h-14 flex items-center justify-center">
                        <PressIcon/>
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">Press</p>
                        <p class="text-gray-500">press@example.com</p>
                        <p class="text-gray-500">+1 234-567-89</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 lg:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                    <div class="flex align-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-white rounded-md shadow-md shadow-secondary  w-14 h-14 flex items-center justify-center">
                        <BugIcon/>
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">Bug report</p>
                        <p class="text-gray-500">bugs@example.com</p>
                        <p class="text-gray-500">+1 234-567-89</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>

        <Footer/>
    </section>

    </>

  )
  
}

export default Home