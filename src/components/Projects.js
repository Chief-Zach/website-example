import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/graphing.png";
import projImg2 from "../assets/img/data.png";
import projImg3 from "../assets/img/sentiment.png";
import projImg4 from "../assets/img/twitterStuff.png";
import projImg5 from "../assets/img/fifth work.jpg";
import projImg6 from "../assets/img/12345.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const Akeo = [
    {
      description: "Data Graphing and Fitting",
      imgUrl: projImg1,
    },
    {
      description: "Cleaning and Compiling of Data",
      imgUrl: projImg2,
    },
    {
      description: "Sentiment APIs",
      imgUrl: projImg3,
    },
    {
      description: "Twitter API Tools",
      imgUrl: projImg4,
    },
    {
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];
  const Personal = [
    {
      description: "Data Graphing and Fitting",
      imgUrl: projImg1,
    },
    {
      description: "Cleaning and Compiling of Data",
      imgUrl: projImg2,
    },
    {
      description: "Sentiment APIs",
      imgUrl: projImg3,
    },
    {
      description: "Twitter API Tools",
      imgUrl: projImg4,
    },
    {
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];
  const Contract = [
    {
      description: "Data Graphing and Fitting",
      imgUrl: projImg1,
    },
    {
      description: "Cleaning and Compiling of Data",
      imgUrl: projImg2,
    },
    {
      description: "Sentiment APIs",
      imgUrl: projImg3,
    },
    {
      description: "Twitter API Tools",
      imgUrl: projImg4,
    },
    {
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row size={10}>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I show you to all the big and small websites I have done so far</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Akeo Tech</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Personal Time</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Contract Work</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Akeo.map((Akeo, index) => {
                            return (
                              <ProjectCard key={index}{...Akeo}/>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          Personal.map((Personal, index) => {
                            return (
                                <ProjectCard key={index}{...Personal}/>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          Contract.map((Contract, index) => {
                            return (
                                <ProjectCard key={index}{...Contract}/>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
