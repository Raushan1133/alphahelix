import React from 'react'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import servicesCards from '@/cards/ServicesCards';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { CounterBox } from '@/component/Counter';
const Services = () => {
      useEffect(() => {
        Aos.init({
          duration: 1000,
          offset: 200,
        });
      }, []);
  return (
    <>
        {/* Section 1 */}
        <div className="container max-w-full pt-56 h-[60vh] services relative  mx-auto px-20">
        <div className="max-w-full mt-20 px-4 md:px-20 absolute top-52 bottom-0 right-0 left-0 ">
          <div data-aos="fade-down" className="bg-primary  rounded  bg-opacity-50  max-w-lg  h-40   flex items-center ">
            <h1 className="text-white font-semibold text-3xl  sm:text-5xl ml-2 text-center w-full">
              Services
            </h1>
          </div>
        </div>
      </div>

            {/* Counter */}
      <div className="flex justify-center items-center gap-2 md:gap-8 p-8 px-2 mt-3">
        <CounterBox label="Key Milestones Achieved" targetNumber={500} duration={2000} />
        <CounterBox label="Consulting Hours Delivered" targetNumber={10000} duration={2000} />
        <CounterBox label="Success Stories Published" targetNumber={150} duration={2000} />
      </div>

        {/* Section 2 */}
        <div className="container px-4 md:px-20 py-32 max-w-full">
            
            <div className='py-50 '>
                <h1 className='sm:text-4xl text-2xl font-semibold sm:tracking-wide '>A versatile range of services crafted to grow with our clients' ambitions.
                </h1>
                <div className='flex items-center flex-col sm:flex-row gap-5 mt-5 py-2 '>
                    <div className='flex flex-row  sm:flex-col items-center mt-2'>
                        <TiSocialLinkedinCircular cursor={'pointer'} className='hover:text-primary transition-all ease-in-out'  size={50} />
                        <TiSocialFacebookCircular cursor={'pointer'} className='hover:text-primary transition-all ease-in-out' size={50} />
                    </div>
                <h1 className='sm:text-xl  font-semibold mt-5 tracking-wide text-gray-500'>Our expertise spans three key domains that drive the digitalization of core business operations: Customer-Centric Solutions, Intelligent Industry, and Enterprise Management. These are powered by two foundational technologies—data and cloud—ensuring seamless digital transformation, while maintaining a strong focus on cybersecurity and sustainable development.
                </h1>
                </div>
                
            </div>
        </div>

        {/* Section 3 */}
        <div className='container sm:px-20 px-4 pb-48 max-w-full '>
            <div>
            <h1 className='text-4xl'>Explore our services</h1>
            </div>

            {/* Card container */}
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">

                {
                    servicesCards.map((card ,index)=>{
                        return(
                            <div className='flex flex-col items-center' key={index}>
                                <div className=' overflow-hidden relative cursor-pointer'>
                                <img src={card.image} alt="cards" className='aspect-square object-cover hover:scale-125 transition-all delay-100'  />
                                </div>
                                <div data-aos="fade-down" className='w-[80%] bg-white dark:bg-gray-800 dark:text-white cursor-pointer flex items-center justify-center py-14 -mt-10 z-10'>
                                    <h1 className='text-base sm:text-2xl text-black dark:text-white font-semibold '>{card.heading}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Services
