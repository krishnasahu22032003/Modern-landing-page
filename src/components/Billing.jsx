import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section className={`${layout.sectionReverse} relative`}>

      <div className={`${layout.sectionImgReverse} relative`}>
        <img
          src={bill}
          alt="billing illustration"
          className="w-full h-full relative z-[5] object-contain"
        />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

    
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Power your vision, <br className="sm:block hidden" /> we’ll handle the
          flow.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our intelligent platform takes care of rewards, transfers, and
          protection — so you can scale with confidence, backed by future-ready
          infrastructure.
        </p>

     
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6 gap-5">
          <img
            src={apple}
            alt="apple_store"
            className="w-[128.86px] h-[42.05px] object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
