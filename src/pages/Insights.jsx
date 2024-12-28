import ResearchImg from "../assets/insights/solutions.avif";
import Card1 from "../assets/insights/telsesales-success.jpg";
import Card2 from "../assets/insights/consultancy-tips.jpg";
import Card3 from "../assets/insights/trends.webp";
import Card4 from "../assets/insights/card4.webp";
import Card5 from "../assets/insights/card5.webp";
import Card6 from "../assets/insights/card6.webp";
import Card7 from "../assets/insights/card7.webp";
import Card8 from "../assets/insights/card8.webp";
import Card9 from "../assets/insights/card9.webp";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Insights = () => {
    useEffect(() => {
      Aos.init({
        duration: 1000,
        offset: 200,
      });
    }, []);
  return (
    <>
      <div className="container max-w-full pt-56 h-[60vh] insights relative  mx-auto px-20">
        <div className="max-w-full mt-20 px-4 md:px-20 absolute top-52 bottom-0 right-0 left-0 ">
          <div data-aos="fade-down" className="bg-primary  rounded  bg-opacity-50  max-w-lg  h-56  flex items-center ">
            <h1 className="text-white font-semibold text-3xl  sm:text-5xl ml-2 text-center w-full">
              Insights
            </h1>
          </div>
        </div>
      </div>



      <section>
        {/* Section 2 */}
        <div className=" py-36 max-w-full bg-cover sm:px-20 px-4 bg-no-repeat w-full h-full overflow-hidden container ">
          <div className="max-w-6xl ">
            <h1 className="font-semibold text-3xl text-wrap">
              Explore our latest thought leadership, ideas, and insights on the
              issues that are shaping the future of business and society.
            </h1>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="container max-w-full  insights-s3 py-28 sm:px-20 px-4">
        <div className="max-w-lg">
          <div className=" max-w-full  bg-white dark:bg-gray-800 px-6 py-6 rounded">
            <h1 className=" font-semibold text-xl">We Simpify Your Works</h1>
            <div className="h-full flex flex-col justify-between  gap-10">
              <h1 className=" font-semibold pt-5 text-gray-500">
                We offer tailored solutions to boost your business growth,
                enhance visibility, and drive customer engagement. Let’s unlock
                your full potential!
              </h1>
              <div className="ml-auto">
                <Link to={"/services"}>
                  <button className="border px-4 py-2 rounded  border-gray-500 hover:scale-110 transition-all hover:bg-primary hover:text-white hover:border-primary">
                    Read More{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="md:flex my-20">
        <div className="">
          <img src={ResearchImg} alt="loading..." className=" transition-all" />
        </div>
        <div className="dark:bg-gray-800 shadow-lg flex flex-col">
          <h1 className="font-semibold text-xl  px-3 mt-2">
            AlphaHelix Solutions
          </h1>
          <div className="h-full flex flex-col  justify-between mx-auto px-3">
            <h1 className=" font-semibold text-gray-500 line-clamp-3">
              Our company fosters a dynamic and collaborative environment,
              empowering teams with growth opportunities and cutting-edge tools.
              We value innovation, professionalism, and teamwork to deliver
              excellence in BPO, consultancy, and tele-sales. Join us for a
              rewarding and success-driven journey!
            </h1>

            <div className="ml-auto my-5 mx-2">
              <Link to={"/careers"}>
                <Button
                  variant="outline"
                  className="border  rounded hover:scale-110 transition-all hover:bg-primary hover:text-white hover:border-primary border-primary text-primary bg-transparent"
                >
                  Get The Future You Want
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="container max-w-full flex items-center">
        <div className="w-full mx-auto">
          <div>
            <h1 className="font-semibold text-xl sm:text-3xl">
              Empowering Your Growth Journey
            </h1>
          </div>

          <div className="w-full grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3  items-center justify-between flex-wrap gap-5 md:gap-20">
            {/* Card 1 */}
            <div className=" flex flex-col overflow-hidden p-5 -mt-10  cursor-pointer">
              <div className="">
                <img
                  src={Card1}
                  alt="img"
                  className="object-contain aspect-square overflow-hidden hover:scale-110 transition-all"
                />
              </div>

              <div>
                <h1 className="text-xl font-semibold -mt-10">
                  Elevating BPO and Tele-Sales Success
                </h1>
                <h1 className="mt-2 font-semibold">
                  Stay ahead with expert advice, proven strategies, and
                  innovative approaches to optimize your BPO operations and
                  tele-sales performance.
                </h1>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col overflow-hidden p-5 -mt-10 cursor-pointer">
              <div className="w-full">
                <img
                  src={Card2}
                  alt="img"
                  className="object-contain aspect-square overflow-hidden hover:scale-110 transition-all"
                />
              </div>

              <div>
                <h1 className="text-xl font-semibold -mt-10">
                  Consultancy Tips That Work
                </h1>
                <h1 className="mt-2 font-semibold">
                  Discover actionable consultancy tips and insights to drive
                  sustainable business growth and streamline your processes
                  effectively.
                </h1>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col overflow-hidden p-5 -mt-10 cursor-pointer">
              <div className="w-full">
                <img
                  src={Card3}
                  alt="img"
                  className="object-contain aspect-square overflow-hidden hover:scale-110 transition-all"
                />
              </div>

              <div>
                <h1 className="text-xl font-semibold -mt-10">
                  {" "}
                  Trends and Tips in BPO and Tele-Sales
                </h1>
                <h1 className="mt-2 font-semibold">
                  Explore the latest trends and practical tips to enhance
                  efficiency, customer engagement, and success in the
                  competitive BPO and tele-sales industry.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="container section6 max-w-full sm:px-20 px-4  flex items-center py-20 my-10">
        <div className="w-full  mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-start">
          <div data-aos="fade-right" className=" dark:bg-gray-800 bg-white md:px-10 md:py-10 px-6 py-6 rounded shadow">
            <div>
              <h1 className=" text-xl font-semibold">
                Conversations for Tomorrow
              </h1>
              <h1 className=" text-xs sm:text-base mt-3 font-semibold text-gray-500 text-wrap">
                The AlphaHelix Research Institute's quarterly flagship
                publication showcases diverse perspectives from best-in-class
                global brands, leading public figures, academics and influencers
                on a chosen topic.
              </h1>
            </div>
            <div className="pt-10 pb-6 ml-auto ">
              <Link to={"/contact"}>
                <button className="border mx-auto px-4 py-2 rounded  border-gray-500 hover:scale-110 transition-all hover:bg-primary hover:text-white hover:border-primary">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      {/* <section className='container max-w-full sm:px-20 px-4   flex items-center  bg-slate-200 py-20'>
      <div className='grid grid-cols-1  md:grid-cols-3 gap-5 w-full'>
        <div className='flex flex-col gap-5 cursor-pointer overflow-hidden'>
          <div>
            <img src={Card7} alt="card" className='hover:scale-110 transition-all' />
          </div>

          <div>
            <h1 className=' text-xl font-semibold'>Research library</h1>
          <h1 className='  mt-3 font-semibold text-wrap'>Browse research and insights from across the business.</h1>
          </div>
        </div>

        <div className='flex flex-col gap-5 cursor-pointer overflow-hidden'>
          <div>
            <img src={Card8} alt="card" className='hover:scale-110 transition-all' />
          </div>

          <div>
            <h1 className=' text-xl font-semibold'>Expert perspectives</h1>
          <h1 className=' text-xs sm:text-base mt-3 font-semibold text-wrap'>Review the archive of blogs from AlphaHelix’s experts
          </h1>
          </div>
        </div>

        <div className='flex flex-col cursor-pointer gap-5 overflow-hidden'>
          <div>
            <img src={Card9} alt="card" className='hover:scale-110 transition-all overflow-hidden ' />
          </div>

          <div>
            <h1 className=' text-xl font-semibold'>Analyst report</h1>
          <h1 className=' text-xs sm:text-base mt-3 font-semibold text-wrap'>Access our archive of analyst citations</h1>
          </div>
        </div>
      </div>
    </section> */}

      {/* Section 8 */}
      {/* <section className='container max-w-full sm:px-20 px-4    flex items-center  bg-slate-600 py-20'>
      <div >
        <h1 className='text-white text-4xl'>Stay informed</h1>
        <div className='flex items-center sm:flex-row flex-col gap-5'>
        <h1 className='text-white text-2xl text-wrap max-w-5xl mt-5'>Subscribe to have the latest reports from the AlphaHelix Research Institute delivered direct to your inbox.</h1>

        <div className='w-fit flex'>
          <button className='px-10 flex hover:bg-cyan-400 hover:border-cyan-400 hover:text-whit transition-all py-3 rounded-full bg-white  border items-center gap-3'>Subscribe <IoIosArrowRoundForward size={30} /></button>
          
        </div>

        </div>
      </div>
    </section> */}
    </>
  );
};

export default Insights;
