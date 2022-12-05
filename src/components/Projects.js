import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "bootstrap";
import { ProjectCard } from "./ProjectCard";
import graphing from "../assets/img/graphing.png";
import twitterStream from "../assets/img/twitterStuff.png";
import projImg3 from "../assets/img/sentiment.png";
import projImg4 from "../assets/img/csvAI.png";
import projImg5 from "../assets/img/fifth work.jpg";
import projImg6 from "../assets/img/12345.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const Akeo = [
    {
      description: "Project using matplotlib and the Hyperspace API to plot the price of an NFT project on Solana" +
          " against its total listed supply. Also includes and heat map to track Twitter followers, and a " +
          "polynomial curve fit to track the relationship between variables.",
      imgUrl: graphing,
    },
    {
      description: "This project involved creating a Twitter stream that would allow the user to monitor all mentions" +
          " of a keyword and input a pre-programed response to each of the Tweets with that keyword",
      imgUrl: twitterStream,
    },
    {
      description: "Sentiment APIs",
      imgUrl: projImg3,
    },
    {
      description: "The data from this project was compiled all into individual CSV and JSON files and cached to " +
          "reduce time spent loading for the API, and reduce the stress on the server.",
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
      imgUrl: graphing,
    },
    {
      description: "Cleaning and Compiling of Data",
      imgUrl: twitterStream,
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
      imgUrl: graphing,
    },
    {
      description: "Cleaning and Compiling of Data",
      imgUrl: twitterStream,
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
                        <h3>Hyperspace</h3>
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
