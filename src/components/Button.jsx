const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-3 px-9 bg-blue-gradient font-poppins font-medium text-[18px] rounded-lg text-primary outline-none 
      transition-all duration-300 ease-in-out hover:brightness-110 hover:scale-105 ${styles}`}
    >
      Unleash Access
    </button>
  );
};

export default Button;
