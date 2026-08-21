const Button = ({handleStart, disabled}) => {
  return (
    <button
      onClick={handleStart}
      className="bg-[#f73859] text-white text-2xl font-semibold w-1/4 h-full cursor-pointer"
    >
      {disabled ? "Start" : "Restart"}
    </button>
  );
};

export default Button;