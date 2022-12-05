import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import tensorflow from "../assets/img/tensorflow.webp";
import matplotlib from "../assets/img/Matplotlib_Logo_191209.webp"
import flask from "../assets/img/flask-logo.webp"
import pandas from "../assets/img/Pandas_logo.svg"
import cpp from "../assets/img/ISO_C++_Logo.svg"
import selenium from "../assets/img/Selenium_logo (1).svg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have experience working with a variety of different tools with Python, as well as other
                            programming languages<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={tensorflow} alt="Image" />
                                <h5>TensorFlow</h5>
                            </div>
                            <div className="item">
                                <img src={matplotlib} alt="Image" />
                                <h5>MatplotLib</h5>
                            </div>
                            <div className="item">
                                <img src={flask} alt="Image" />
                                <h5>Flask (for APIs)</h5>
                            </div>
                            <div className="item">
                                <img src={pandas} alt="Image" />
                                <h5>Pandas</h5>
                            </div>
                            <div className="item">
                                <img src={cpp} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={selenium} alt="Image" />
                                <h5>Selenium</h5>
                            </div>


                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
