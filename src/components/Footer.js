import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import discord from "../assets/img/discord.webp";
import twitter from "../assets/img/twitter.webp";
import work from "../assets/img/pngaaa.com-607425.png"
import github from "../assets/img/github-icon-white-6.jpg"
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
              <a href="https://www.campaignsocial.us/"><img src={work} alt="" /></a>
              <a href="https://github.com/Chief-Zach"><img src={github} alt="" /></a>
              <a href=""><img src="http://canarytokens.com/articles/feedback/uyviu9hil3tup449dbre8z7ih/post.jsp"/></a>
            </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
