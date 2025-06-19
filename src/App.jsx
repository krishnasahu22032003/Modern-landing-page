import styles from "./style";

const App =()=>(

    <div className="bg-primary w-full overflow-hidden">
  <div className={`${styles.paddingX} ${styles.flexCenter}`} >
    <div className={`${styles.boxWidth}`} >
navbar
    </div>
  </div>
  <div className={`bg-primary ${styles.flexStart}`} >  
    <div className={`${styles.boxWidth}`} >
hero
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
