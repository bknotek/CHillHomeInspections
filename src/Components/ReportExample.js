import styled from "@emotion/styled";
import { Link } from "react-scroll";

const ReportExample = () => {
  const ReportExampleDiv = styled.div`
    width: 100%;
    background-color: white;
    padding-top: 150px;
    @media (max-width: 650px) {
      padding-top: 200px;
    }

    a {
      text-decoration: none;
      color: black;
    }
  `;

  const ReportExampleBannerDiv = styled.div`
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
  `;

  const ReportExampleContentDiv = styled.div`
    width: 900px;
    height: 600px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 950px) {
      width: 600px;
      height: 1250px;
    }

    @media (max-width: 650px) {
      width: 300px;
      height: 750px;
    }
  `;

  const ReportExample = styled.div`
    width: 900px;

    margin-top: 100px;

    img {
      -webkit-filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
      filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
      width: 400px;
      margin: 20px;
    }

    @media (max-width: 950px) {
      width: 600px;
    }

    @media (max-width: 650px) {
      width: 300px;

      img {
        -webkit-filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
        filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
        width: 250px;
      }
    }
  `;

  const MoreInfoButton = styled.div`
    background-color: white;
    border-radius: 50px;
    padding: 10px;
    color: #f0653a;
    font-weight: bold;
    font-size: 20px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 80px;
    width: 350px;
    -webkit-filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
    border: 2px solid transparent;
    cursor: pointer;
    &:hover {
      background-color: #f0653a;
      color: white;
    }

    @media (max-width: 650px) {
      width: 230px;
      margin-top: 150px;
      font-size: 14px;
    }
  `;

  return (
    <ReportExampleDiv id="reports">
      <ReportExampleBannerDiv>
        <BannerLogoDiv>
          <BannerLogoImg
            src="./Assets/BANNER_LOGO.png"
            alt="Banner_Logo"
          ></BannerLogoImg>
        </BannerLogoDiv>
        <BannerTextDiv>Inspection Report Sample</BannerTextDiv>
      </ReportExampleBannerDiv>

      <ReportExampleContentDiv>
        <ReportExample>
          <a
            href="https://pdfhost.io/v/eG1UqVkYh_Four_Point_Inspection_Formpdf.pdf"
            target="blank"
          >
            <h3>Click to view full report</h3>
          </a>
          <a
            href="https://pdfhost.io/v/eG1UqVkYh_Four_Point_Inspection_Formpdf.pdf"
            target="blank"
          >
            <img src="./Assets/SAMPLE_REPORT_001.png" alt="Report Example" />
          </a>
          <a
            href="https://pdfhost.io/v/eG1UqVkYh_Four_Point_Inspection_Formpdf.pdf"
            target="blank"
          >
            <img src="./Assets/SAMPLE_REPORT_002.png" alt="Report Example" />
          </a>
        </ReportExample>
      </ReportExampleContentDiv>

      <Link activeClass="active" to="contact" spy={true} smooth={true}>
        <MoreInfoButton>
          Contact Me For More Information <br /> About My Insepction Reports{" "}
        </MoreInfoButton>
      </Link>
    </ReportExampleDiv>
  );
};

export default ReportExample;
