import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "bootstrap";
import { ProjectCard } from "./ProjectCard";
import graphing from "../assets/img/graphing.png";
import jarvis from "../assets/img/jarvis.png"
import canadianPlot from "../assets/img/subdivision.png"
import intents from "../assets/img/intents.png"
import portfolioTracker from "../assets/img/portfolioTracker.png"
import portfolioTrackerApi from "../assets/img/portfolioTrackerApi.png"
import twitterStream from "../assets/img/twitterStuff.png";
import sentiment1 from "../assets/img/sentiment.png";
import csvAI from "../assets/img/csvAI.png";
import authImage from "../assets/img/twitterAuth.png";
import twitterNLP from "../assets/img/twitterNLP.png";
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
      description: "Project involved the creation of an API incorporating the Hyperspace API and various others to create " +
          "a portfolio tracking application for the Solana blockchain. This portfolio tracker fetches all of the NFTs " +
          "in a wallet, fetches their last sale, and subtracts that by its current value",
      imgUrl: portfolioTrackerApi,
    },
    {
      description: "Project involving the use of the Twitter API and TensorFlow to create a dataset of crypto related" +
          " keywords allowing the user of the API to get the sentiment of crypto related tweets",
      imgUrl: sentiment1,
    },
    {
      description: "The data from this project was compiled all into individual CSV and JSON files and cached to " +
          "reduce time spent loading for the API, and reduce the stress on the server.",
      imgUrl: csvAI,
    },
    {
      description: "I than worked in conjunction with my team to create a frontend for the portfolio tracker",
      imgUrl: portfolioTracker,
    },
    {
      description: "This project also featured multiple access points allowing users to get sentiment by username, " +
          "project name, or keyword. It also features a OAUTH key system with SHA-256 encryption to encrypt user keys ",
      imgUrl: twitterNLP,
    },
  ];
  const Personal = [
    {
      description: "This project uses WIT.AI created by Facebook to recognize the predetermined intents that are created" +
          " using a supervised training model. It has access to Wikipedia meaning that it can answer most questions " +
          "and can interact using a range of predetermined responses. ",
      imgUrl: jarvis,
    },
    {
      description: "Project using the Pandas library and data from the Canadian government on mean house sales by " +
          "subdivisions across Canada, sorted by the province that they are located in",
      imgUrl: canadianPlot,
    },
    {
      description: "Sentiment APIs",
      imgUrl: sentiment1,
    },
    {
      description: "The chat-bot has an array of 5 currently working functions that can process the current time, most " +
          "questions, small conversations like hello and goodbye, and currency conversions.",
      imgUrl: intents,
    },
    {
      description: "Design & Development",
      imgUrl: authImage,
    },
    {
      description: "Design & Development",
      imgUrl: twitterNLP,
    },
  ];
  const Contract = [
    {
      description: "Data Graphing and Fitting",
      imgUrl: graphing,
    },
    {
      description: "This project involved creating a Twitter stream that would allow the user to monitor all mentions" +
          " of a keyword and input a pre-programed response to each of the Tweets with that keyword",
      imgUrl: twitterStream,
    },
    {
      description: "Sentiment APIs",
      imgUrl: sentiment1,
    },
    {
      description: "Twitter API Tools",
      imgUrl: csvAI,
    },
    {
      description: "The application generated an OAUTH identification code leading to the company landing page creating " +
          "plug and play for any company or user wanting the service",
      imgUrl: authImage,
    },
    {
      description: "Design & Development",
      imgUrl: twitterNLP,
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
