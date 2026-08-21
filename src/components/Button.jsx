const Button = ({handleStart, disabled}) => {
  return (
    <button
      onClick={handleStart}
      className="bg-black text-white text-lg font-semibold w-1/4 h-full cursor-pointer"
    >
      {disabled ? "Start" : "Restart"}
    </button>
  );
};

export default Button;