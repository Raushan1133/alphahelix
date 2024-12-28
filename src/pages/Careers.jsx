import { FaSearch } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card1 from '../assets/careers/card1.webp'
import Card2 from '../assets/careers/card2.webp'
import card3 from '../assets/careers/card3.webp'
import card6 from '../assets/careers/card6.webp'
import card4 from '../assets/careers/card4.webp'
import card5 from '../assets/careers/card5.webp'
import charts from '../assets/careers/charts.webp'
import Aos from "aos";
import "aos/dist/aos.css";
import { CounterBox } from '@/component/Counter';
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

const Careers = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 200,
    });
  }, []);
  return (
    <>
        {/* Section 1 */}
        <div className='container max-w-full pt-56 h-[60vh] md:mb-20 mb-32  careers relative  mx-auto px-20'>
            <div className="max-w-full mt-20 px-4 md:px-20 absolute top-52 bottom-0 right-0 left-0">
            <div data-aos="fade-down" className="bg-primary  rounded  bg-opacity-50  max-w-lg  h-56  flex items-center flex-col gap-10 justify-center p-10">
               <div className='text-4xl w-full'>
               <h1 className='text-white font-semibold '>FIND YOUR FUTURE</h1>
               </div>
               <div className='max-w-2xl w-full relative'>
               <input type="text" placeholder='search for your future role search' className='bg-white text-black outline-none w-full max-w-lg px-6 py-4 rounded-full mt-5' />
               <div className="h-14 w-14  absolute  top-5 cursor-pointer font-bold text-black right-0 bottom-0  bg-cyan-600 rounded-full text-center flex items-center justify-center text-xl">
               <FaSearch onClick={()=>toast.error("Currently we are not hiring for entered role")} />
               </div>
               </div>
            </div>
            </div>
        </div>
      

        {/* Section 2 */}
        {/* <div className="container px-4 md:px-20 py-48 max-w-full bg-slate-200">
            
            <div className='py-50 bg-slate-200'>
                <h1 className='sm:text-4xl text-2xl text-black font-semibold sm:tracking-wide '>A constantly evolving portfolio to meet the ever-changing needs of our clients.
                </h1>
                <div className='flex items-center flex-col sm:flex-row gap-5 mt-5 py-2 '>
                    <div className='flex flex-row  sm:flex-col items-center text-black mt-2'>
                        <TiSocialLinkedinCircular cursor={'pointer'}  size={50} />
                        <TiSocialFacebookCircular cursor={'pointer'} size={50} />
                    </div>
                <div>
                <h1 className='sm:text-xl  text-black font-semibold mt-5 tracking-wide'>Helping our clients grow while building a more sustainable, more inclusive future is a tough ask. But when you join AlphaHelix, you join a thriving company and become part of a diverse global collective of free-thinkers, entrepreneurs and industry experts who are all driven to use technology to reimagine what’s possible – and rewrite the future.
                </h1>

                <h1 className='sm:text-xl  text-black font-semibold mt-5 tracking-wide'>Together, we work to transform the world’s leading businesses and build a better future while always pushing ourselves to do better. Together, we build great careers and give innovation that human touch the world needs.
                </h1>

                <h1 className="sm:text-xl  text-black font-bold mt-5 tracking-wide">AlphaHelix. Get the future you want.</h1>
                </div>
                </div>
                
            </div>
        </div> */}

        {/* Section 3 */}
        {/* <div className="container px-4 md:px-20 pb-48 max-w-full bg-slate-200">
          <div className="w-full bg-slate-900 flex items-center flex-col gap-5 lg:gap-0 lg:flex-row py-32 justify-around">
            <div className="bg-slate-200 text-black py-4 px-4 lg:block hidden">
              <Link to={'/'} className="hover:underline">Please allow advertising cookies to see this Youtube embed</Link>
            </div>
            <div className="flex items-start flex-col gap-5 text-white">
              <h1 className="text-xl">Rewrite your future</h1>
              <p>Clotilde’s story of sustainability</p>
            </div>
          </div>
          <div className="bg-slate-400 text-black py-4 px-4 lg:hidden block text-center mt-5 ">
              <Link to={'/'} className="hover:underline">Please allow advertising cookies to see this Youtube embed</Link>
            </div>
        </div> */}

        {/* Section 4 */}
        {/* <div className="container px-4 md:px-20 pb-48 max-w-full bg-slate-200">
          <h1 className="text-black text-4xl pb-5">Explore AlphaHelix</h1>
          <div className="w-full grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-4  gap-4">
            <div className="w-full cursor-pointer">
              <div>
              <img src={Card1} alt="card1" />
              </div>
              <div className="flex py-3 px-2 bg-slate-400">
                <div >
                  <h1 className="text-black font-semibold  text-xl absolute">Why join AlphaHelix</h1>
                </div>
              <div className="text-black ml-auto text-3xl"><FaLongArrowAltRight /></div>
              </div>
            </div>

            <div className="bg-blue-400 py-4 px-4 flex flex-col cursor-pointer">
            <div >
                <h1 className="text-black font-semibold  text-xl absolute">Life at AlphaHelix</h1>
            </div>

            <div className="text-black ml-auto text-3xl mt-auto"><FaLongArrowAltRight /></div>
            </div>

            <div className="bg-blue-600 py-4 px-4 flex flex-col cursor-pointer">
            <div >
                <h1 className="text-black font-semibold  text-xl absolute">Meet our people  </h1>
            </div>

            <div className="text-black ml-auto text-3xl mt-auto"><FaLongArrowAltRight /></div>
            </div>

            <div className="w-full cursor-pointer">
              <div>
              <img src={Card2} alt="card1" />
              </div>
              <div className="w-full flex py-3 px-2 bg-slate-400">
                <div >
                  <h1 className="text-black font-semibold  text-xl absolute">Career paths</h1>
                </div>
              <div className="text-black ml-auto text-3xl"><FaLongArrowAltRight /></div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Section 5 */}
        {/* <div className="container  bg-cyan-950  max-w-full">
          <div className="w-full px-4 grid-cols-1 gap-5 lg:grid-cols-2 grid">
            <div className="flex justify-center">
            <div className="flex flex-col gap-5 justify-center items-center max-w-lg">
              <div className="sm:text-4xl text-xl text-white -ml-16">
              <h1 className="text-start">Careers at AlphaHelix Invent</h1>
              </div>
              <div className="text-xl text-white">
              <h1>Get the future you want – for yourself, for our clients, and for society as a whole.</h1>
              </div>

              <div className="w-full">
                <button className="rounded-full flex hover:bg-red-600 hover:border-red-600 transition-all hover:scale-110 text-white font-semibold w-full border border-white px-4 py-4">Find your future at AlphaHelix <FaLongArrowAltRight className="ml-auto text-2xl"/> </button>
              </div>
            </div>
            </div>
          <div className="w-full">
            <img src={card3} alt="card3" className="w-full" />
          </div>
          </div>
        </div> */}

        {/* Section 6 */}
        {/* <div className="container px-4 md:px-20 max-w-full bg-slate-200">
          <div className="cursor-pointer">
            <img src={charts} alt="" />
          </div>
        </div> */}

        {/* Section 7 */}
        {/* <div className="container px-4 md:px-20 max-w-full bg-slate-200">
          <h1 className="text-2xl text-black font-semibold">Explore AlphaHelix</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5">
            <div className="overflow-hidden cursor-pointer mx-auto">
              <img src={card6} alt="card6" className="hover:scale-110 transition-all" />
              <h1 className="text-xl text-black py-5 font-semibold">Why join AlphaHelix</h1>
            </div>
            <div className="overflow-hidden cursor-pointer mx-auto">
              <img src={card4} alt="card6" className="hover:scale-110 transition-all" />
              <h1 className="text-xl text-black py-5 font-semibold">Why join AlphaHelix</h1>
            </div>
            <div className="overflow-hidden cursor-pointer mx-auto">
              <img src={card5} alt="card6" className="hover:scale-110 transition-all" />
              <h1 className="text-xl text-black py-5 font-semibold">Why join AlphaHelix</h1>
            </div>
          </div>
        </div> */}
    </>
  )
}

export default Careers
