import { useState } from "react"
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
    const [toogle, settoogle] = useState(false)
  return (
  <nav className="w-full flex py-6 justify-between items-center navbar" >
<img src="src/assets/logo.png" alt="" className="w-[120px] h-[120px] "/>
<ul className="list-none sm:flex hidden justify-end items-center flex-1" >
{navLinks.map((nav,index)=>(
    <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-white ${index===navLinks.length-1? 'mr-0':'mr-10'}  text-[16px] `} >
        <a href={`#${nav.id}`}>
            {nav.title}
        </a>
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
