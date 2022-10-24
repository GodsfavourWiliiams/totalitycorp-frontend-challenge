import "../styles/Homepage.css";
import Hero from "../components/Hero/Hero";
import HeroPng from "../components/assets/hero.png";
import Footer from "../components/Footer/Footer";
import GridContainer from "../components/GridContainer/GridContainer";
import HeroTwo from "../components/HeroTwo/HeroTwo";
import Caruosel from "../components/Caruosel/Caruosel";

const SliderData = [
  {
    image:
      'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
  }
];

const Homepage = () => {
  const heroSectionData = [
    {
      heading: "iphone14Pro",
      subHeading: "Pro. Beyond.",
      className: "black",
      imgClass:"home-iphone14pro_img"
    },
    {
      heading: "iphone14",
      subHeading: "Big and bigger",
      className: "gry",
      imgClass:"home-iphone14_img"
    }
  ];


  return (
    <div className="homepage-container">
      <div className="banner-sections">
        <Hero
          title="iPad"
          desc="Lovable. Drawing.Magical."
          image={HeroPng}
          text="Avalible strating 10.26"
        />
      </div>
      <>
        {heroSectionData.map((hero, index) => (
          <HeroTwo
          key={index}
          heading={hero.heading}
          subHeading= {hero.subHeading}
          className={hero.className}
          imgClass={hero.imgClass}
        />
        ))}
        </>
      <GridContainer/>
      <Caruosel
      slides={SliderData}/>
      <Footer/>
    </div>
  );
};

export default Homepage;
