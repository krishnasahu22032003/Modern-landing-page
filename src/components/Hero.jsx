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
  <span className="text-white" >50%</span> Discount For {" "}
<span className="text-white" > One Month</span> Account
</p>
        </div>
        <div className="flex flex-row items-center w-full justify-between" >
<h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss-leading-[100px] leading-[75px] text-white">
      The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "} <br />
            payment method
</h1>
<div className="sm:flex hidden md:mr-4 mr-0" > 
  <Getstart />
</div>
        </div>
        
      </div>
 </section>
  )
}

export default Hero
