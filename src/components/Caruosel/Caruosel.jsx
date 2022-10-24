import "./caruosel.css"

const Carousel = () => {
  return (
     <section id="SliderSection">
            <input type="radio" name="navigate" id="slide1" defaultChecked />
            <input type="radio" name="navigate" id="slide2" />
            <input type="radio" name="navigate" id="slide3" />
            <input type="radio" name="navigate" id="slide4" />
            <input type="radio" name="navigate" id="slide5" />
            <input type="radio" name="navigate" id="slide6" />
            <input type="radio" name="navigate" id="slide7" />
            <input type="radio" name="navigate" id="slide8" />
            <input type="radio" name="navigate" id="slide9" />
            <input type="radio" name="navigate" id="slide10" />
            <input type="radio" name="navigate" id="slide11" />
            <input type="radio" name="navigate" id="slide12" />

            <div className="carousel">
                <div className="carousel-tweleve"></div>
            </div>
            <div className="carousel">
                <div className="carousel-one"></div>
            </div>
            <div className="carousel">
                <div className="carousel-two"></div>
            </div>
            <div className="carousel">
                <div className="carousel-three"></div>
            </div>
            <div className="carousel">
                <div className="carousel-four"></div>
            </div>
            <div className="carousel">
                <div className="carousel-five"></div>
            </div>
            <div className="carousel">
                <div className="carousel-six"></div>
            </div>
            <div className="carousel">
                <div className="carousel-seven"></div>
            </div>
            <div className="carousel">
                <div className="carousel-eight"></div>
            </div>
            <div className="carousel">
                <div className="carousel-nine"></div>
            </div>
            <div className="carousel">
                <div className="carousel-ten"></div>
            </div>
            <div className="carousel">
                <div className="carousel-eleven"></div>
            </div>
            <div className="carousel">
                <div className="carousel-tweleve"></div>
            </div>

            <div id="bullets">
                <label htmlFor="slide1"></label>
                <label htmlFor="slide2"></label>
                <label htmlFor="slide3"></label>
                <label htmlFor="slide4"></label>
                <label htmlFor="slide5"></label>
                <label htmlFor="slide6"></label>
                <label htmlFor="slide7"></label>
                <label htmlFor="slide8"></label>
                <label htmlFor="slide9"></label>
                <label htmlFor="slide10"></label>
                <label htmlFor="slide11"></label>
                <label htmlFor="slide12"></label>
            </div>
        </section>
  );
};

export default Carousel;