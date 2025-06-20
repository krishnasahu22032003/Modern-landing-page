import { features } from "../constants"
import styles, {layout} from "../style"
import Button from "./Button"

const Business = () => {
  return (
    <section className={`${layout.section}`} id="features" >
<div className={`${layout.sectionInfo}`}>
<h2 className={`${styles.heading2}`}> You focus on the future, <br className="sm:block hidden" /> we’ll power the system.</h2>
<p className={`${styles.paragraph} max-w-[470px] mt-5`}>  Whether you’re scaling fast or just getting started, our platform automates transactions, boosts rewards, and secures your flow — all in real time.</p>
<Button
styles="mt-10"
/>
</div>
    </section>
  )
}

export default Business
