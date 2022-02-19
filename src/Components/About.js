import styled from "@emotion/styled";
import { Link } from "react-scroll";

const About = () => {
  const AboutDiv = styled.div`
    height: 1200px;
    width: 100%;
    padding-top: 150px;

    @media (max-width: 650px) {
      height: 2800px;
      padding-top: 200px;
      margin-top: -200px;
    }
  `;

  const AboutBannerDiv = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 90px;

    @media (max-width: 650px) {
      height: 60px;
    }
  `;

  const BannerLogoDiv = styled.div`
    width: 20%;
    height: 90px;
    float: left;
    @media (max-width: 650px) {
    }
  `;

  const BannerLogoImg = styled.img`
    height: 100%;
    @media (max-width: 650px) {
      height: 60%;
    }
  `;

  const BannerTextDiv = styled.div`
    width: 80%;
    height: 70px;
    background-color: #f0653a;
    float: left;
    border-radius: 100px 0px 0px 100px;
    color: white;
    font-size: 40px;
    font-weight: bold;
    padding-top: 20px;
    -webkit-filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));

    @media (max-width: 650px) {
      height: 40px;
      font-size: 20px;
    }
  `;

  const AboutContentDiv = styled.div`
    width: 900px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;

    @media (max-width: 950px) {
      width: 600px;
    }

    @media (max-width: 650px) {
      width: 300px;
    }
  `;

  const AboutTopDiv = styled.div``;

  const AboutImgDiv = styled.div`
    width: 450px;
    float: left;
    img {
      width: 100%;
      -webkit-filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.8));
      filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.8));
    }

    @media (max-width: 950px) {
      width: 300px;
      float: left;
    }

    @media (max-width: 650px) {
      float: none;
    }
  `;

  const AboutTextDiv = styled.div`
    width: 450px;

    float: left;
    text-align: left;
    font-size: 14px;
    font-weight: 250;

    span {
      color: #f0653a;
      font-weight: bold;
      font-size: 16px;
    }

    @media (max-width: 950px) {
      width: 600px;

      float: none;
    }

    @media (max-width: 650px) {
      width: 300px;
    }
  `;

  const AboutBottomDiv = styled.div`
    width: 900px;
    margin-top: -20px;
    float: left;

    @media (max-width: 950px) {
      width: 600px;
    }

    @media (max-width: 650px) {
      width: 300px;
    }
  `;

  const HighlightDiv = styled.div`
    width: 225px;
    height: 300px;
    float: left;
    margin-left: 55px;
    margin-top: 50px;

    @media (max-width: 950px) {
      width: 150px;
      margin-left: 35px;
    }

    @media (max-width: 650px) {
      float: none;
      width: 100%;
      height: 400px;
      margin-left: 0px;
    }
  `;

  const HighlightImgDiv = styled.div`
    width: 100%;
    height: 200px;
    margin-right: auto;
    margin-left: auto;
    img {
      width: 180px;
    }

    @media (max-width: 950px) {
      height: 150px;
      img {
        width: 150px;
      }
    }

    @media (max-width: 650px) {
      height: 250px;

      img {
        width: 250px;
      }
    }
  `;

  const HighlightTextDiv = styled.div`
    width: 100%;
    height: 150px;
    margin-right: auto;
    margin-left: auto;
    margin-top: -30px;

    p {
      font-size: 12px;
      font-weight: 250;
    }

    @media (max-width: 950px) {
      height: 200px;

      h4 {
        font-size: 18px;
      }
    }

    @media (max-width: 650px) {
      height: 150px;
    }
  `;

  const BadgeDiv = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    float: left;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    img {
    }

    @media (max-width: 650px) {
      display: block;

      img {
        width: 250px;
      }
    }
  `;

  const HighlightButton = styled.div`
    background-color: white;
    border-radius: 50px;
    padding: 10px;
    color: #f0653a;
    font-weight: bold;
    font-size: 10px;
    margin-right: auto;
    margin-left: auto;
    margin-top: -30px;
    width: 90px;
    -webkit-filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
    border: 2px solid transparent;
    cursor: pointer;
    &:hover {
      background-color: #f0653a;
      color: white;
    }
  `;

  return (
    <AboutDiv id="about">
      <AboutBannerDiv>
        <BannerLogoDiv>
          <BannerLogoImg
            src="./Assets/BANNER_LOGO.png"
            alt="Banner_Logo"
          ></BannerLogoImg>
        </BannerLogoDiv>
        <BannerTextDiv>Why Choose Me?</BannerTextDiv>
      </AboutBannerDiv>
      <AboutContentDiv>
        <AboutTopDiv>
          <AboutImgDiv>
            <img src="./Assets/ABOUT_IMG_002.png" alt="About Image" />
          </AboutImgDiv>
          <AboutTextDiv>
            <h2>Clyde Hill - Certified Propery Inspector</h2>

            <p>
              <span>Welcome to Hill's Home Inspection</span>. Clyde Hill is a
              certified home inspector and is proudly serving Watsonville, CA
              and the surrounding areas. Mr. Hill understands the importance of
              making an informed decision when taking the steps to choose a
              home. Hill’s Home Inspection is here for you, whether you’re
              picking you and your family’s new home sweet home, or a real
              estate agent scoping out properties for their agency or clients.
              <br />
              <br />
              With his up-to-date knowledge, Mr. Hill is ready to assist every
              home buyer with their purchase and every real estate agent with
              their sales. Hill's Home Inspection’s ultimate goal is to bring
              each and every client peace of mind when starting their home
              purchasing journey. Hill's Home Inspection approaches each
              inspection with precision and thoroughness by utilizing in-depth
              structural analyses and integrating new drone technology. With a
              well-trained eye, Hill’s Home Inspection takes the guesswork out
              of the equation so homeowners, and real estate agents alike, can
              make data-driven decisions when it comes to buying a home.
            </p>
          </AboutTextDiv>
          <br />

          <BadgeDiv>
            <img
              src="./Assets/ICA_BADGE.png"
              alt="ICA Badge"
              width="250px"
              height="130px"
            />
            <br />
            <br />
            <br />
            <a
              href="https://www.homeadvisor.com/rated.HillsHomeInspection.112005351.html"
              target="blank"
            >
              <img
                src="./Assets/HOME-ADVISOR-BADGE.png"
                alt="HomeAdvisor Badge"
                width="150px"
              />
            </a>
          </BadgeDiv>
        </AboutTopDiv>

        <AboutBottomDiv>
          <HighlightDiv>
            <HighlightImgDiv>
              <img
                src="./Assets/Icons/Final/HIGHLIGHT-professional_reliable.png"
                alt="Highlight Image"
              />
            </HighlightImgDiv>
            <HighlightTextDiv>
              <h3>Professional & Reliable</h3>
              <p>
                Always on time, always courteous, always there for you. For the
                best inspection services in the area, contact Hill's Home
                Inspection today!
              </p>
            </HighlightTextDiv>

            <Link activeClass="active" to="contact" spy={true} smooth={true}>
              <HighlightButton>
                Call for more
                <br /> information
              </HighlightButton>
            </Link>
          </HighlightDiv>
          <HighlightDiv>
            <HighlightImgDiv>
              <img
                src="./Assets/Icons/Final/HIGHLIGHT-great_customer_service.png"
                alt="Highlight Image"
              />
            </HighlightImgDiv>
            <HighlightTextDiv>
              <h3>Great Customer Service</h3>
              <p>
                Hill’s Home Inspection is ready to take on any project and guide
                you throughout the process. Friendly and prompt service, every
                time.
              </p>
            </HighlightTextDiv>
            <Link activeClass="active" to="reports" spy={true} smooth={true}>
              <HighlightButton>
                See Inspection
                <br />
                Report Examples
              </HighlightButton>
            </Link>
          </HighlightDiv>
          <HighlightDiv>
            <HighlightImgDiv>
              <img
                src="./Assets/Icons/Final/HIGHLIGHT-certified.png"
                alt="Highlight Image"
              />
            </HighlightImgDiv>
            <HighlightTextDiv>
              <h3>Certified Inspector</h3>
              <p>
                Clyde Hill is a certified home inspector and has been trained in
                the newest, most up-to-date procedures and codes.{" "}
              </p>
            </HighlightTextDiv>
            <HighlightButton>
              Read Our <br /> Reviews
            </HighlightButton>
          </HighlightDiv>
        </AboutBottomDiv>
      </AboutContentDiv>
    </AboutDiv>
  );
};

export default About;
