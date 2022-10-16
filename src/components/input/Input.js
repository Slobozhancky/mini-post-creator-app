const Input = ({ type = "text", placeholder = "text", className = null }) => {
  return (
    <>
      <input className={className} type={type} placeholder={placeholder} />
    </>
  );
};

export default Input;
