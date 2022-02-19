import styled from "@emotion/styled";
import { Link } from "react-scroll";

const Intro = () => {
  const IntroDiv = styled.div`
    width: 100%;
    height: 100%;
    -webkit-filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.8));
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.8));

    video {
      height: 100%;
    }

    @media (max-height: 750px) {
    }
  `;

  const IntroText = styled.h1`
    color: white;
    position: absolute;
    top: 220px;
    -webkit-filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.8));
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.8));
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    width: 800px;
    font-size: 35px;

    @media (max-width: 850px) {
      font-size: 24px;
      width: 550px;
    }

    @media (max-width: 650px) {
      top: 240px;
      font-size: 18px;
      width: 360px;
    }
  `;

  const IntroButtonsDiv = styled.div`
    width: 300px;
    height: 400px;
    position: absolute;
    top: 550px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;

    @media (max-width: 650px) {
      top: 520px;
    }
  `;

  const IntroButton = styled.div`
    width: 300px;
    height: 50px;
    background-color: #f0653a;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
    border-radius: 50px;
    font-size: 24px;
    font-weight: bold;
    padding-top: 20px;
    color: white;
    -webkit-filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
    cursor: pointer;

    &:hover {
      background-color: #ffffff;
      color: #f0653a;
    }

    @media (max-width: 650px) {
      width: 200px;
      height: 35px;
      font-size: 18px;
      padding-top: 10px;
    }
  `;

  const AboutButton = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    background-color: white;
    border-radius: 50px;
    padding: 10px;
    color: #f0653a;
    font-weight: bold;
    font-size: 20px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 80px;
    width: 150px;
    -webkit-filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
    border: 2px solid transparent;
    cursor: pointer;

    &:hover {
      background-color: #f0653a;
      color: white;
    }

    @media (max-width: 650px) {
      width: 150px;
      font-size: 18px;
      bottom: 0px;
    }
  `;

  const AboutArrow = styled.div`
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    cursor: pointer;

    margin-right: auto;
    margin-left: auto;

    width: 50px;

    img {
      width: 40px;
    }

    @media (max-width: 650px) {
      bottom: -10px;

      img {
        width: 30px;
      }
    }
  `;

  // const IntroVideo = styled.video`
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   objectFit: cover;
  //   left 50%;
  //   top: 50%;
  //   transform:translate(-50%,-50%);
  //   z-Index: -1
  // `;

  return (
    <IntroDiv id="intro">
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",

          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src="./Assets/HEADER_BG.mp4" type="video/mp4" />
      </video>
      <IntroText>
        Certified Property Inspector Serving Watsonville,CA and the surrounding
        areas
      </IntroText>
      <IntroButtonsDiv>
        <Link activeClass="active" to="services" spy={true} smooth={true}>
          <IntroButton>Services</IntroButton>
        </Link>

        <Link activeClass="active" to="reports" spy={true} smooth={true}>
          <IntroButton>Sample Report</IntroButton>
        </Link>

        <Link activeClass="active" to="contact" spy={true} smooth={true}>
          <IntroButton>Contact Me Today</IntroButton>
        </Link>
      </IntroButtonsDiv>

      <Link activeClass="active" to="about" spy={true} smooth={true}>
        <AboutButton>About</AboutButton>
      </Link>

      <AboutArrow>
        <Link activeClass="active" to="about" spy={true} smooth={true}>
          <img src="./Assets/DOWN_ARROW.png" alt="arrow"></img>
        </Link>
      </AboutArrow>

      {/* <Link activeClass="active" to="about" spy={true} smooth={true}>
        <AboutArrow src="./Assets/DOWN_ARROW.png" alt="arrow"></AboutArrow>
      </Link> */}
    </IntroDiv>
  );
};

export default Intro;
