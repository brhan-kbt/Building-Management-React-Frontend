import React from 'react'
import { BackgroundIcon } from './icons/icons'
import Footer from './shared/Footer'
import Navbar from './shared/Navbar'

const About = () => {
  return (
    <>
    <Navbar/>
        <section class="overflow-hidden pt-20 px-8 md:px-28 bg-white text-dark pb-12 lg:pt-[120px] lg:pb-[90px]">
            <div class="container mx-auto">
                <div class="-mx-4 flex flex-wrap items-center justify-between">
                <div class="w-full px-4 lg:w-6/12">
                    <div class="-mx-3 flex items-center sm:-mx-4">
                    <div class="w-full px-3 sm:px-4 xl:w-1/2">
                        <div class="py-3 sm:py-4">
                        <img
                            src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-1.jpg"
                            alt=""
                            class="w-full rounded-2xl"
                        />
                        </div>
                        <div class="py-3 sm:py-4">
                        <img
                            src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-2.jpg"
                            alt=""
                            class="w-full rounded-2xl"
                        />
                        </div>
                    </div>
                    <div class="w-full px-3 sm:px-4 xl:w-1/2">
                        <div class="relative z-10 my-4">
                        <img
                            src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg"
                            alt=""
                            class="w-full rounded-2xl"
                        />
                        <span class="absolute -right-7 -bottom-7 z-[-1]">
                        <BackgroundIcon/>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
                    <div class="mt-10 lg:mt-0">
                    <span class="text-primary mb-2 block text-lg font-semibold">
                        Why Choose Us
                    </span>
                    <h2 class="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                        Make your customers happy by giving services.
                    </h2>
                    <p class="text-body-color mb-8 text-base">
                    Our cutting-edge platform streamlines every aspect of property management, 
                    from rent collection to maintenance requests. With just a few clicks, you
                    can enjoy seamless efficiency and improve your bottom line. We prioritize 
                    user-friendliness and make property management simpler than ever before. 
                    </p>
                    <p class="text-body-color mb-12 text-base">
                    Additionally, secure a consistent brand image with a domain name 
                    that matches your business - it's a crucial first step in establishing your brand. 
                    Our services are designed to make your customers happy and satisfied. Join us and
                    experience the best property management services available.
                    </p>
                    <a
                        href="javascript:void(0)"
                        class="bg-primary inline-flex items-center justify-center rounded-lg py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                        Get Started
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </section>
    <Footer/>
    </>
  )
}

export default About