import { feedback } from "../constants"
import styles from "../style"
import FeedbackCard from "./FeedbackCard"
const Testimonials = () => {
  return (
<section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
<div className="w-full justify-between items-center mb-6 relative z-[1] md:flex-row flex-col sm:mb-16"> 
  <h1 className={`${styles.heading2}`} >What People are <br className="sm:block hidden" /> saying about us</h1>
  <div className="w-ful md:mt-0 mt-6">
<p className={`${styles.paragraph} text-left max-w-[450px]`}>
   Everything you need to accept card payments and grow your business
  anywhere on the planet.</p>
  </div>
  </div>
  <div className="flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[1]">
    {feedback.map((card)=>{
      return <FeedbackCard key={card.id} {...card}/>
    })}

  </div>
</section>
  )
}

export default Testimonials
