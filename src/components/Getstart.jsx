import styles from "../style";
import { arrowUp } from "../assets";

const Getstart = () => {
  return (
    <div
      className={`group relative w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer transition-all duration-300 
      bg-blue-gradient hover:shadow-[0_0_18px_rgba(0,207,255,0.45)] hover:scale-[1.03]`}
    >
      <div
        className={`absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_30%,_#00CFFF,_#D200FF_70%)]`}
      ></div>

      <div
        className={`relative z-10 ${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full transition-all duration-300`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Begin</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins text-center font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Now</span>
        </p>
      </div>
    </div>
  );
};

export default Getstart;
