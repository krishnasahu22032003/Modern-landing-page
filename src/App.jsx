import styles from "./style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Business from "./components/Business";
import Button from "./components/Button";
import Billing from "./components/billing";
import CardDeal from "./components/CardDeal";
import CTA from "./components/CTA";
import Footer from "./components/Footer"
import Getstarted from "./components/Getstarted"
import Stats from "./components/Stats"
import Testimonials from "./components/Testimonials"
import FeedbackCard from "./components/FeedbackCard";
import Clients from "./components/Clients"
const App =()=>(

    <div className="bg-primary w-full overflow-hidden">
  <div className={`${styles.paddingX} ${styles.flexCenter}`} >
    <div className={`${styles.boxWidth}`} >
<Navbar/>
    </div>
  </div>
  <div className={`bg-primary ${styles.flexStart}`} >  
    <div className={`${styles.boxWidth}`} >
<Hero/>
    </div>

  </div>
  <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`} >  
    <div className={`${styles.boxWidth}`} >
stats 
billing 
business
cardeal
testing
clinets
cta 
footer
    </div>

  </div>
    </div>
);



export default App
