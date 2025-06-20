import styles from "../style"
import discountNew from "../assets/discount.png";
import { robot } from "../assets"
import Getstart from "./Getstart";

const Hero = () => {
  return (
    
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `} >
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 overflow-hidden`} >
        <div className="flex flex-row items-center py-[6px] px-4 overflow-hidden bg-discount-gradient rounded-[10px] mb-2" >
         <img src={discountNew} alt="discount" className="w-[30px] h-[30px] object-contain" />
<p className={`${styles.paragraph} ml-2`}>
  <span className="text-white">Unleash</span> 50% Off for Your {" "}
<span className="text-white">First Month</span> — Start Now!
</p>
        </div>
        <div className="flex flex-row items-center w-full justify-between" >
<h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] sm-leading-[100px] leading-[75px] text-white">
      Enter the <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Future</span>{" "} <br />
          
</h1>
<div className="sm:flex hidden md:mr-4 mr-0" > 
  <Getstart />
</div>
        </div>
        <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] sm-leading-[100px] w-full leading-[75px] text-white">
      
            of Transactions
</h1>
<p className={`${styles.paragraph} max-w-[470px] mt-5 `}> Step into a world where speed meets security. Our advanced payment system adapts to you — fast, seamless, and built for the future.</p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
<img src={robot} alt="billing" className="w-[80%] h-[80%] relative  z-[5] object-contain" />

  <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
  <div className={`sm:hidden ${styles.flexCenter}`}>
    <Getstart/>
      </div>

 </section>
  )
}

export default Hero
