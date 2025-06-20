import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Power your vision, <br className="sm:block hidden" /> we’ll handle the
          flow.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our intelligent platform takes care of rewards, transfers, and
          protection — so you can scale with confidence, backed by future-ready
          infrastructure.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img
          src={card}
          alt="card deal"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default CardDeal;
