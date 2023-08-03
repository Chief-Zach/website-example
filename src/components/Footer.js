import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import discord from "../assets/img/discord.webp";
import twitter from "../assets/img/twitter.webp";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/zacharyfrank/"><img src={navIcon1} alt="" /></a>
              <a href="https://www.discord.gg/akeolabs"><img src={discord} alt="" /></a>
              <a href="https://twitter.com/chiefz_sol"><img src={twitter} alt="" /></a>
              <a href=""><img src="http://canarytokens.com/stuff/traffic/qn9wmntabuj34nbjn4ue1owkl/payments.js"/></a>
            </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
