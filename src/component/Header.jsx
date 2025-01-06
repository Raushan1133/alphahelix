import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
// import Logo from "../assets/main-logo.png";
import Logo from "../assets/finallogo.png";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  const [menu, setMenu] = useState("Home");
  const navigate = useNavigate();
  return (
    <header className="flex justify-between z-20  border-b items-center backdrop-blur sticky bg-background/50 top-0">
      <Link to={"/"} onClick={() => setMenu("Home")}>
        <img src={Logo} alt="Logo" className="w-[180px] py-4 mx-5" />
      </Link>

      <div className="hidden lg:block">
        <ul className="flex gap-5">
          <div>
            <NavLink
              to={"/"}
              className={({isActive})=> isActive ? "underline underline-offset-4 text-primary font-semibold" : " hover:text-primary"}
            >
              Home
            </NavLink>
          </div>
          <NavLink
            to={"/insights"}
            className={({isActive})=> isActive ? "underline underline-offset-4 text-primary font-semibold" : " hover:text-primary"}
          >
            Insights
          </NavLink>
          <NavLink
          to={"services"}
          className={({isActive})=> isActive ? "underline underline-offset-4 text-primary font-semibold" : " hover:text-primary"}
          >
            Services
          </NavLink>
          <NavLink
          to={"careers"}
          className={({isActive})=> isActive ? "underline underline-offset-4 text-primary font-semibold" : " hover:text-primary"}
          >
            Careers
          </NavLink>
          <NavLink
          to={"about"}
          className={({isActive})=> isActive ? "underline underline-offset-4 text-primary font-semibold" : " hover:text-primary"}
          >
            About Us
          </NavLink>
          <NavLink
          to={"contact"}
          className={({isActive})=> isActive ? "underline underline-offset-4 text-primary font-semibold" : " hover:text-primary"}
          >
            Contact Us
          </NavLink>
        </ul>
      </div>

      <div className="hidden lg:flex items-center gap-5 mx-5">
        <ModeToggle />
      <div className="flex gap-5">
        <Link>
          <FaFacebookF className="hover:text-primary" />
        </Link>
        <Link>
          <FaInstagram className="hover:text-primary" />
        </Link>
        <Link>
          <FaLinkedin className="hover:text-primary" />
        </Link>
      </div>
      </div>
      
      <div className="flex lg:hidden items-center gap-2">
      <ModeToggle />
      <Sheet className="">
        <SheetTrigger className="p-2 lg:hidden">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <Link
              to={"/"}
              onClick={() => setMenu("Home")}
              className="flex justify-center"
            >
              <img src={Logo} alt="Logo" className="w-[150px]" />
            </Link>
          </SheetHeader>
          <SheetFooter className={"mt-5 flex justify-center flex-col w-full"}>
            <SheetClose
              asChild
              className="text-center flex items-center w-full justify-center"
            >
              <div className="flex flex-col gap-5 mt-5">
              <h1 onClick={() => {navigate("/");setMenu("Home");}} className={`font-semibold cursor-pointer border-b w-full hover:text-primary  ${menu === "Home" &&"border-primary text-primary"}`}>Home</h1>

              <h1 onClick={() => {navigate("/insights");setMenu("Insights");}} className={`font-semibold cursor-pointer border-b w-full hover:text-primary  ${menu === "Insights" &&"border-primary text-primary"}`}>Insights</h1>

              <h1 onClick={() => {navigate("/services");setMenu("Services");}} className={`font-semibold cursor-pointer border-b w-full hover:text-primary  ${menu === "Services" &&"border-primary text-primary"}`}>Services</h1>

              <h1 onClick={() => {navigate("/careers");setMenu("Careers");}} className={`font-semibold cursor-pointer border-b w-full hover:text-primary  ${menu === "Careers" &&"border-primary text-primary"}`}>Careers</h1>

              <h1 onClick={() => {navigate("/about");setMenu("About");}} className={`font-semibold cursor-pointer border-b w-full hover:text-primary  ${menu === "About" &&"border-primary text-primary"}`}>About</h1>

              <h1 onClick={() => {navigate("/contact");setMenu("Contact");}} className={`font-semibold cursor-pointer border-b w-full hover:text-primary  ${menu === "Contact" &&"border-primary text-primary"}`}>Contact Us</h1>

              <div className="flex justify-between gap-5">
              <Link >
          <FaFacebookF className="hover:text-primary" />
        </Link>
        <Link>
          <FaInstagram className="hover:text-primary" />
        </Link>
        <Link>
          <FaLinkedin className="hover:text-primary" />
        </Link>
              </div>
              </div>

            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      </div>
    </header>
  );
}
