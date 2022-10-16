const Button = ({ url = null, type = "button", text, className = null }) => {
    
  let btn = "";
  if (url !== null) {
    btn = (
      <button className={className} type={type}>
        <img src={url} alt="img" />
      </button>
    );
  } else {
    btn = (
      <button className={className} type={type}>
        {text}
      </button>
    );
  }

  return <>{btn}</>;
};

export default Button;
