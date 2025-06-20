import { clients } from "../constants"
import styles from "../style"

const Clients = () => {
  return (
<section className={`${styles.flexCenter} my-4`}>
  <div className={`${styles.flexCenter} flex-wrap w-full`}>
    {clients.map((client) => (
      <div
        key={client.id}
        className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5 
        transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-125`}
      >
        <img
          src={client.logo}
          alt="client_logo"
          className="sm:w-[192px] w-[100px] object-contain"
        />
      </div>
    ))}
  </div>
</section>

  )
}

export default Clients
