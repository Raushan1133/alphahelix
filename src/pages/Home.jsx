import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import sixthimg from "../assets/homepage-images/consulting.webp";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import Counters from "@/component/Counter";
import { ArrowRight, CloudCog, PhoneCall, Settings } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Input } from "@/components/ui/input"
import Fifthbg from '../assets/homepage-images/fifth-section-bg.jpg'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  }, []);
  return (
    <>
      {/* Banner  */}
      <div className="banner max-w-full py-44  container bg-cover bg-no-repeat w-full h-full overflow-hidden">
        <div className=" max-w-full text-center text-white">
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            className="sm:text-6xl text-3xl  font-semibold text-center text-primary"
          >
Unlock your true potential.
</h2>
          <div className="w-full">
            <h1 className=" font-semibold text-xl ">
              <Typewriter
                words={["Navigate infinite possibilities"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </h1>
          </div>

          <div className="mt-2">
            <a href="#section2">
              <Button>Get Started</Button>
            </a>
          </div>
        </div>
      </div>

      {/* Section COunter */}
      <div className="">
        <Counters />
      </div>
      {/* Section 2 */}

      <div className="my-10" id="section2">
        <h1 className="font-semibold text-6xl text-center">Our Services</h1>
        <h2 className="text-center uppercase font-bold text-primary">
          Areas That We Cover
        </h2>
        <div className="flex flex-wrap gap-5 mt-5 justify-center items-center px-5">
          {/* Card 1 */}
          <div className="border flex items-start hover:scale-105 hover:shadow-primary ease-in-out justify-center transition-all max-w-xs rounded shadow flex-col p-4 cursor-pointer ">
            <div className=" p-4 mx-auto bg-primary rounded-full text-white">
              <Settings />
            </div>
            <h2 className="text-center mx-auto font-bold">
              Corporate Solution
            </h2>
            <p className="text-center text-gray-400">
              Empowering businesses with tailored corporate solutions to
              streamline operations, drive growth, and achieve sustainable
              success.
            </p>
          </div>
          {/* Card 2 */}
          <div className="border flex items-start hover:scale-105 hover:shadow-primary ease-in-out justify-center transition-all max-w-xs rounded shadow flex-col p-4 cursor-pointer">
            <div className=" p-4 mx-auto bg-primary rounded-full text-white">
              <PhoneCall />
            </div>
            <h2 className="text-center mx-auto font-bold">
              Call Center Solution
            </h2>
            <p className="text-center text-gray-400">
              Empowering businesses with tailored corporate solutions to
              streamline operations and achieve sustainable growth.
            </p>
          </div>
          {/* Card 3 */}
          <div className="border flex items-start hover:scale-105 hover:shadow-primary ease-in-out justify-center transition-all max-w-xs rounded shadow flex-col p-4 cursor-pointer">
            <div className=" p-4 mx-auto bg-primary rounded-full text-white">
              <CloudCog />
            </div>
            <h2 className="text-center mx-auto font-bold">Cloud Solution</h2>
            <p className="text-center text-gray-400">
              Transforming businesses with secure, scalable cloud solutions that
              optimize operations and drive innovation ans much more.
            </p>
          </div>
        </div>
        <div className="w-full text-center mt-5">
          <Link to={"/services"}>
            <Button className="text-white">Explore All Services</Button>
          </Link>
        </div>
      </div>

      {/* Section 3 */}
      <div className="my-10 bg-slate-100 dark:bg-gray-800">
        <h1 className="font-semibold md:text-6xl text-2xl text-center p-3">
          Why Choose Us
        </h1>
        <h2 className="text-center uppercase font-bold text-primary">
          Some Reasons
        </h2>
        <div className="flex flex-wrap p-10  text-center  gap-10 justify-center items-center ">
          {/* Card 1 */}
          <div className="flex flex-col gap-2 items-center p-4  justify-center max-w-sm">
            <div className="flex items-center justify-center">
              <span className="flex text-primary">
                01 <ArrowRight />
              </span>
              <h1 className="font-semibold md:text-2xl text-xl ">
                High Quality Hardware
              </h1>
            </div>
            <p className="text-gray-500">
              Durable, cutting-edge hardware designed for optimal performance,
              reliability, and long-term efficiency in any environment.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-2 items-center p-4 justify-center max-w-sm">
            <div className="flex items-center justify-center">
              <span className="flex text-primary">
                02 <ArrowRight />
              </span>
              <h1 className="font-semibold md:text-2xl text-xl ">
                Dedicated 24/7 Support
              </h1>
            </div>
            <p className="text-gray-500 text-center">
              Round-the-clock dedicated support to address your needs promptly
              and ensure seamless operations at all times.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-2 items-center p-4 justify-center max-w-sm">
            <div className="flex items-center justify-center">
              <span className="flex text-primary ">
                03 <ArrowRight />
              </span>
              <h1 className="font-bold md:text-xl text-xl ">
                30-Day Money Back Gurantee
              </h1>
            </div>
            <p className="text-gray-500 text-center">
              Enjoy peace of mind with our 30-day money-back guarantee, ensuring
              your complete satisfaction and confidence.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col gap-2 items-center p-4 justify-center max-w-sm">
            <div className="flex items-center justify-center">
              <span className="flex text-primary">
                04 <ArrowRight />
              </span>
              <h1 className="font-semibold md:text-2xl text-xl ">
                Agile And Fast Work Style
              </h1>
            </div>
            <p className="text-gray-500 text-center">
              Experience swift and adaptive workflows designed to deliver
              efficient results without compromising on quality.
            </p>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col gap-2 items-center p-4 justify-center max-w-sm">
            <div className="flex items-center justify-center">
              <span className="flex text-primary">
                05 <ArrowRight />
              </span>
              <h1 className="font-semibold md:text-2xl text-xl ">
                High Level Of Usability
              </h1>
            </div>
            <p className="text-gray-500 text-center">
              Designed with user-friendly interfaces for seamless navigation and
              an intuitive experience for all.
            </p>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col gap-2 items-center p-4 justify-center max-w-sm">
            <div className="flex items-center justify-center">
              <span className="flex text-primary">
                06 <ArrowRight />
              </span>
              <h1 className="font-semibold md:text-2xl text-xl ">
                Some Apps Are Free
              </h1>
            </div>
            <p className="text-gray-500 text-center">
              Access a selection of free apps to enhance your experience without
              any additional cost.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div  className="py-10 flex flex-col  items-center sm:flex-row  justify-center gap-10 sm:gap-20">
        <div className="relative">
          <div className="h-48 w-48 bg-gradient-to-r from-[#1d4ed8] to-[#9333ea]  rounded-full"></div>
          <div className="h-48 w-48 flex flex-col text-center items-center bg-white  justify-center shadow-xl  rounded-full absolute left-10 top-5">
            <span className="text-primary text-center  font-semibold text-6xl">
              10+
            </span>
            <p className="font-semibold">Years Of Experience</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-primary font-bold text-xl">2K+</h1>
            <h1 className="font-semibold">Apps Developed</h1>
          </div>
          <div>
            <h1 className="text-primary font-bold text-xl">40+</h1>
            <h1 className="font-semibold">Consultant</h1>
          </div>
          <div>
            <h1 className="text-primary font-bold text-xl">160+</h1>
            <h1 className="font-semibold">Employers</h1>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div
        // style={{ backgroundImage: `url(${Fifthbg})` }}
        className="max-w-full px-4  py-[50px] mt-10 relative dark:bg-gray-800"
      >
        <div className="container mx-auto  flex justify-center ">
          <div className="max-w-2xl  ">
            <h1 className="text-4xl font-bold ">
              AlphaHelix: Your Agile Growth Partner
            </h1>
            <p className="mt-10">
              {" "}
              Empowering businesses to thrive in dynamic environments, AlphaHelix
              combines agility with innovative solutions to drive growth. With
              expertise in workforce management, compliance, and process
              optimization, we are your trusted partner in navigating challenges
              and unlocking potential. At AlphaHelix, we don’t just adapt to
              change—we lead the way, helping you achieve sustainable success
              with efficiency and excellence.
            </p>
            <p className="mt-10">
              We partner with organizations to tackle challenges head-on,
              offering tailored strategies that drive measurable results.
              Whether you’re streamlining processes, scaling operations, or
              enhancing productivity, AlphaHelix is by your side every step of the
              way. Together, let’s unlock potential, embrace change, and achieve
              success with confidence and ease.
            </p>
          </div>
        </div>

        <div className="text-center mt-5 ">
          <Link to={"/contact"}>
          <Button className="rounded-lg outline-none text-white px-3 py-3">
            Contact us
          </Button>
          </Link>
        </div>

        {/* <div className=" w-full flex justify-center flex-wrap mx-auto absolute -bottom-20 ">
          <div className="max-w-4xl">
            <div className= "grid  grid-cols-5 overflow-x-scroll scrollbar-hidden  mt-28 gap-5  sm:flex-row">
              <div className="border max-w-32 w-full py- px-6  rounded-xl shadow-xl ">
                <p className="">20+ years of industry expertise</p>
              </div>

              <div className="border max-w-32 w-full py-4 px-6 rounded-xl shadow-xl ">
                <p className="text-wrap ">Agile and adapatable</p>
              </div>

              <div className="border max-w-32 w-full py-4 px-6 rounded-xl shadow-xl ">
                <p className="text-wrap ">Collaborative and client-focused</p>
              </div>

              <div className="border max-w-32 w-full py-4 px-6 rounded-xl shadow-xl ">
                <p className="text-wrap ">Quality and reliability</p>
              </div>

              <div className="border max-w-32 w-full py-4 px-6 rounded-xl shadow-xl ">
                <p className="text-wrap ">A diverse and talented team</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Section 6 */}
      <div className="max-w-full px-4 mt-10">
        <h1 className="text-4xl text-center font-bold ">
          Cultivating a Culture of Growth
        </h1>
        <div className="container flex items-center mx-auto mt-10 gap-10 flex-col sm:flex-row justify-center">
          <div className="max-w-sm">
            <img src={sixthimg} alt="" className="rounded-lg" />
          </div>
          <div className="max-w-sm ">
            <p>
              We’re moving forward. We’re moving upward. At AlphaHelix, our
              employees have the freedom to innovate, the ownership to act, and
              the resources to thrive. Our culture goes beyond mere employment,
              promoting outstanding performance and overall well-being. If
              you’re looking for a company that values its people, come join us
              at AlphaHelix.
            </p>
            <div className="text-center">
              <Link to={"/about"}>
              <Button className=" mt-10 text-white">
                Learn More
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div className="max-w-full  py-[50px] mx-auto">
        <h1 className="text-4xl font-bold  text-center">
          Let's Talk About Your Project
        </h1>
        <div className="container px-4 flex justify-center flex-col md:flex-row mx-auto gap-3  mt-5">
          <div className=" flex  max-w-md w-full justify-center items-center mx-auto md:mx-0">
            <form action="" className="flex gap-10 flex-col w-full">
              <Input
                type="text"
                className=" border py-6 grid-cols-6  rounded w-full border-black focus:border-red-500"
                placeholder="Full name"
              />
              <Input
                type="text"
                className=" border py-6 grid-cols-6  rounded w-full border-black focus:border-red-500"
                placeholder="Business email"
              />
              <Input
                type="text"
                className=" border py-6 grid-cols-6  rounded w-full border-black focus:border-red-500"
                placeholder="Phone"
              />
            </form>
          </div>

          <div className="flex flex-col max-w-md  justify-center md:mx-0  mx-auto md:ml-3">
            <div className="flex gap-1">
              <input type="checkbox" />
              <p>
                By submitting this information, I agree that I have gone through
                the AlphaHelix’s Privacy Policy and I provide my consent to AlphaHelix
                Technologies to process & store my personal information.Please
                fill out this field.
              </p>
            </div>
            <div className="flex gap-1 mt-5">
              <input type="checkbox" />
              <p>
                By submitting this information, I agree that I have gone through
                the AlphaHelix’s Privacy Policy and I provide my consent to AlphaHelix
                Technologies to process & store my personal information.Please
                fill out this field.
              </p>
            </div>
            <div className="flex gap-1 mt-5">
              <input type="checkbox" />
              <p>
                By submitting this information, I agree that I have gone through
                the AlphaHelix’s Privacy Policy and I provide my consent to AlphaHelix
                Technologies to process & store my personal information.Please
                fill out this field.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-5 text-white">
          <Button className="">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
