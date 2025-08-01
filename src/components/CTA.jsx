import styles from "../style"
import Button from "./Button"

const CTA = () => {
  return (
   <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Step into the Future — Start Today</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Experience intelligent payments, real-time transfers, and seamless security — all in one powerful platform, built for what’s next.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
  )
}

export default CTA
