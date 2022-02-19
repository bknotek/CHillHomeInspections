import styled from "@emotion/styled";
import { Link } from "react-scroll";

const Footer = () => {
  const FooterDiv = styled.div`
    width: 100%;
    height: 250px;
    background-color: #f0653a;

    p {
      color: white;
      font-weight: bold;
      margin: 0px;
      margin-bottom: 10px;
    }

    a {
      text-decoration: none;
    }
  `;

  const Services = styled.div`
    width: 500px;

    margin-left: auto;
    margin-right: auto;

    display: flex;
    justify-content: space-evenly;

    list-style-type: none;
    li {
      color: white;
      cursor: pointer;
      margin: 0px;
      justify-content: space-evenly;
      justify-content: center;
      &:hover {
        text-decoration: underline;
      }
    }

    @media (max-width: 650px) {
      width: 100%;
      font-size: 14px;
    }
  `;

  const SocialMediaDiv = styled.div`
    width: 500px;

    margin-right: auto;
    margin-left: auto;

    img {
      width: 60px;
      margin: 15px;
      cursor: pointer;
    }

    @media (max-width: 650px) {
      width: 300px;

      img {
        width: 30px;
        margin: 15px;
        cursor: pointer;
      }
    }
  `;

  return (
    <FooterDiv>
      <Services>
        <a href="/index.html">
          <li>Home</li>
        </a>
        <Link activeClass="active" to="about" spy={true} smooth={true}>
          <li>About</li>
        </Link>
        <Link activeClass="active" to="services" spy={true} smooth={true}>
          <li>Services</li>
        </Link>
        <Link activeClass="active" to="reports" spy={true} smooth={true}>
          <li>Example Reports</li>
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true}>
          <li>Contact</li>
        </Link>
      </Services>
      <SocialMediaDiv>
        <img src="./Assets/SM_ICONS/BING.png" alt="" />

        <a href="https://g.page/hills-home-inspection?share" target="blank">
          <img src="./Assets/SM_ICONS/GOOGLE.png" alt="" />
        </a>

        <a
          href="https://www.yelp.com/biz/hills-home-inspection-watsonville"
          target="blank"
        >
          <img src="./Assets/SM_ICONS/YELP.png" alt="" />
        </a>
        <a
          href="https://www.homeadvisor.com/rated.HillsHomeInspection.112005351.html"
          target="blank"
        >
          <img src="./Assets/SM_ICONS/HOME_ADVISOR.png" alt="" />
        </a>
      </SocialMediaDiv>
      <a href="tel:408-409-0857">
        <p>(408) 409-0857</p>
      </a>
      <a href="mailto:clyde@hillshomeinspection.com">
        <p>clyde@hillshomeinspection.com</p>
      </a>
      <a href="/index.html">
        <img src="./Assets/LOGO-top.png" alt="Footer Logo" width="180px" />
      </a>
    </FooterDiv>
  );
};

export default Footer;
