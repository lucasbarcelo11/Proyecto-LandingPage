import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="flex items-center w-full p-4 h-[10vh] ">
      <div className="w-1/6 text-center">
        <span className="text-2xl font-bold relative p-1  bg-white cursor-pointer">
          Power<span className="text-primary text-5xl">.</span>{" "}
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
        </span>
      </div>
      <nav className="flex-1 flex items-center  justify-center gap-10">
        <a href="#" className="">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Products</a>
      </nav>
    </header> 
  );
};

export default Header;
