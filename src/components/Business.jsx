import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Featurecard = ({ icon, title, content, index }) => (
  <div className="flex flex-row p-6 rounded-[20px] feature-card">
    <div className="w-[64px] h-[64px] rounded-full bg-dimBlue flex items-center justify-center">
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section className={`${layout.section}`} id="features">
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You focus on the future, <br className="sm:block hidden" /> we’ll
          power the system.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Whether you’re scaling fast or just getting started, our platform
          automates transactions, boosts rewards, and secures your flow — all
          in real time.
        </p>
        <Button styles="mt-10 " />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <Featurecard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
