import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowRight } from "react-icons/md";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowTurnUp } from "react-icons/fa6";


const Footer = () => {
        // Scroll state
        const [isVisible, setIsVisible] =useState(false);
        const currentYear = new Date().getFullYear();

        const scrollTop = ()=>{
          window.scrollTo({top:0,
          behavior:'smooth'});
        }
      
        const listenToScroll = ()=>{
          let heightToHidden = 250;
          const windowScroll = document.body.scrollTop|| document.documentElement.scrollTop;
      
          windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
        }
      
        useEffect(()=>{
          window.addEventListener("scroll",listenToScroll);
        },[])
  return (
    <>
      <div className='bg-black text-gray-400 relative'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 justify-items-center items-start lg:flex-row flex-col mx-16 gap-10 justify-between py-10'>
            <div className='flex flex-col gap-5 justify-center'>
                <h1 className='font-bold text-white uppercase'>AlphaHelix Solutions</h1>
                <p>A passionate team of creatives thriving in Delhi NCR, the beating heart of India.
                </p>
                <div><span className='font-bold'>Let's Connect : </span><a href='mailto:info@alphahelixservices.com'>info@alphahelixservices.com</a></div>
            </div>

            <div className='flex flex-col gap-2 justify-center'>
                <h1 className='font-bold text-white ml-1 uppercase'>Our Services</h1>
                <Link to={"/services"} className='flex gap-1 items-center hover:text-primary transition-all hover:translate-x-2'><MdArrowRight/> Cloud Services</Link>
                <Link to={"/services"} className='flex gap-1 items-center hover:text-primary transition-all hover:translate-x-2'><MdArrowRight/> Corporate Solutions</Link>
                <Link to={"/services"} className='flex gap-1 items-center hover:text-primary transition-all hover:translate-x-2'><MdArrowRight/> Digital Services</Link>
                <Link to={"/services"} className='flex gap-1 items-center hover:text-primary transition-all hover:translate-x-2'><MdArrowRight/> <span>Consulting Services</span></Link>
                <Link to={"/services"} className='flex gap-1 items-center hover:text-primary transition-all hover:translate-x-2'><MdArrowRight/> Health Care</Link>
            </div>
            <div className='flex flex-col gap-2 justify-center'>
                <h1 className='font-bold text-white uppercase'>Important Links</h1>
                <Link to={"/insights"} className='flex gap-1 items-center hover:text-primary transition-all hover:translate-x-2'><MdArrowRight/> <span>Insights </span></Link>
                <Link to={"/services"} className='flex gap-1 items-center hover:text-primary transition-all hover:translate-x-2'><MdArrowRight/> Services</Link>
                <Link to={"/careers"} className='flex gap-1 items-center hover:text-primary transition-all  hover:translate-x-2'><MdArrowRight/> Careers</Link>
                <Link to={"/about"} className='flex gap-1 items-center hover:text-primary transition-all    hover:translate-x-2'><MdArrowRight/> About Us</Link>
                <Link to={"/contact"} className='flex gap-1 items-center hover:text-primary transition-all  hover:translate-x-2'><MdArrowRight/> Contact Us</Link>
                <Link to={"/privacy-policy"} className='flex gap-1 items-center hover:text-primary transition-all  hover:translate-x-2'><MdArrowRight/> Privacy Policy</Link>
            </div>
            <div className='flex flex-col gap-10 justify-center '>
                <h1 className='font-bold text-white'>SUBSCRIBE</h1>
                <div className='text-center gap-5 flex flex-col'>
                <Input placeholder="Email Address*" className="border-b border-t-0 border-l-0 border-r-0 shadow-none" />
                <Button className="text-white">Subscribe</Button>
                </div>
            </div>
            
        </div>
        {
      isVisible && (
        <div className='scroll_top shadow-2xl absolute bg-primary right-0 flex items-center justify-center' onClick={scrollTop} >
    <FaArrowTurnUp className='text-white font-semibold text-2xl' />
    </div>
      )
    }

<p className='text-center'>&copy; {currentYear} Alphaheix Services. All Rights Reserved.</p>
</div>
    </>
  )
}

export default Footer
