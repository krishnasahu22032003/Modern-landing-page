import { useState } from "react"
import { close, menu } from "../assets";
import logo from "../assets/logo.png";
import { navLinks } from "../constants";

const Navbar = () => {
    const [toogle, settoogle] = useState(false)
  return (
  <nav className="w-full flex py-6 justify-between items-center navbar" >
<img src={logo} alt="" className="w-[120px] h-[120px] "/>
<ul className="list-none sm:flex hidden justify-end items-center flex-1" >
{navLinks.map((nav, index) => (
  <li
    key={nav.id}
    className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${
      index === navLinks.length - 1 ? "mr-0" : "mr-10"
    } relative group transition-all duration-300`}
  >
    <a
      href={`#${nav.id}`}
      className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[radial-gradient(circle_at_30%_30%,_#00CFFF,_#D200FF_70%)]"
    >
      {nav.title}
    </a>
    <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[radial-gradient(circle_at_30%_30%,_#00CFFF,_#D200FF_70%)] transition-all duration-300 group-hover:w-full"></span>
  </li>
))}
</ul>
<div className="sm:hidden items-center flex flex-1 justify-end" >
<img src={toogle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={()=>settoogle((prev)=>!toogle )} />

        <div
          className={`${
            !toogle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
            <ul className="list-none flex-col flex  justify-end items-center flex-1" >
{navLinks.map((nav,index)=>(
    <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-white ${index===navLinks.length-1? 'mr-0':'mb-4'}  text-[16px] `} >
        <a href={`#${nav.id}`}>
            {nav.title}
        </a>
    </li>
))}
</ul>
            


        </div>
</div>
  </nav>
  )
}

export default Navbar
