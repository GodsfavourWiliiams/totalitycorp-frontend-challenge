import "./Hero.css";

const Hero = ({ title, desc, image, text, className }) => {
  return (
    <div className={`banner-container ${className}`}>
      <img src={image} alt="" />

      <div className="banner-body">
        <h3>{title}</h3>
        <p>{desc}</p>
        <span>{text}</span>

        <div className="button-wrappers">
          <button>Learn more {">"} </button>
          <button>Order now {">"} </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
