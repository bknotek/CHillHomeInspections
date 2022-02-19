import styled from "@emotion/styled";
import { Link } from "react-scroll";

const Services = () => {
  const ServicesDiv = styled.div`
    height: 1500px;
    width: 100%;
    background-color: white;
    padding-top: 150px;

    @media (max-width: 650px) {
      height: 1250px;
      padding-top: 200px;
      margin-top: -100px;
    }
  `;

  const ServicesBannerDiv = styled.div`
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
    border-radius: 0px 100px 100px 0px;
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

  const ServicesContentDiv = styled.div`
    width: 900px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 950px) {
      width: 600px;
    }

    @media (max-width: 650px) {
      width: 300px;
    }
  `;

  const MainServicesDiv = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;

    @media (max-width: 950px) {
    }

    @media (max-width: 650px) {
      margin-top: 50px;
    }
  `;

  const ServiceDiv = styled.div`
    width: 380px;

    background-color: white;
    float: left;
    border-radius: 50px 50px 50px 50px;
    margin-left: 40px;
    margin-bottom: 50px;
    text-align: left;

    border: 3px solid transparent;

    &:hover {
      border: 3px solid black;
      -webkit-filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
      filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
    }

    p {
      margin-top: 26px;
      font-size: 25px;
    }

    @media (max-width: 950px) {
      width: 280px;
      margin-left: 0px;
      p {
        margin-top: 15px;
        font-size: 25px;
      }
    }

    @media (max-width: 650px) {
      width: 120px;
      margin-top: 10px;
      margin-bottom: 20px;
      margin-left: 20px;

      p {
        margin-top: 15px;
        font-size: 20px;
      }
      &:hover {
        border: 3px solid transparent;
        -webkit-filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0));
        filter: drop-shadow(0px 0px px rgba(0, 0, 0, 0));
      }
    }
  `;

  const ServiceIcon = styled.img`
    float: left;
    width: 60px;
    margin-left: 25px;
    margin-right: 20px;
    margin-top: 10px;

    @media (max-width: 650px) {
    }
  `;

  const MoreServicesDiv = styled.div`
    width: 280px;
    padding: 20px;

    background-color: red;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50px 50px 50px 50px;
    background-color: #f0653a;
    -webkit-filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));

    p {
      margin: 12px;
      font-size: 16px;
      color: white;

      cursor: pointer;
      font-weight: bold;

      &:hover {
        color: black;
      }
    }

    h1 {
      float: left;
      margin: 10px;
      color: white;
      cursor: default;
    }

    @media (max-width: 650px) {
      width: 200px;

      p {
        margin: 12px;
        font-size: 12px;
        color: white;

        cursor: pointer;
        font-weight: bold;

        &:hover {
          color: black;
        }
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
      width: 150px;
      margin-top: 30px;
      font-size: 16px;
    }
  `;

  return (
    <ServicesDiv id="services">
      <ServicesBannerDiv>
        <BannerTextDiv>Services I Offer</BannerTextDiv>
        <BannerLogoDiv>
          <BannerLogoImg
            src="./Assets/BANNER_LOGO.png"
            alt="Banner_Logo"
          ></BannerLogoImg>
        </BannerLogoDiv>
      </ServicesBannerDiv>
      <ServicesContentDiv>
        <MainServicesDiv>
          <ServiceDiv>
            <ServiceIcon
              src="./Assets/Icons/Final/ResidentialServices.png"
              alt="Residential Inspections Icon"
            />

            <p>Residential Inspections</p>
          </ServiceDiv>
          <ServiceDiv>
            <ServiceIcon
              src="./Assets/Icons/Final/CommercialServices.png"
              alt="Commercial Inspections Icon"
            />
            <p>Commercial Inspections</p>
          </ServiceDiv>
          <ServiceDiv>
            <ServiceIcon
              src="./Assets/Icons/Final/ElectricalServices.png"
              alt="Electrical Inspection Icon"
            />
            <p>Electrical Inspections</p>
          </ServiceDiv>
          <ServiceDiv>
            <ServiceIcon
              src="./Assets/Icons/Final/HVACServices.png"
              alt="HVAC Inspections Icon"
            />
            <p>HVAC Inspections</p>
          </ServiceDiv>

          <ServiceDiv>
            <ServiceIcon
              src="./Assets/Icons/Final/RoofingServices.png"
              alt="Electrical Inspection Icon"
            />
            <p>Roof Inspections</p>
          </ServiceDiv>
          <ServiceDiv>
            <ServiceIcon
              src="./Assets/Icons/Final/PlumbingServices.png"
              alt="Plumbing Inspections Icon"
            />
            <p>Plumbing Inspections</p>
          </ServiceDiv>

          <ServiceDiv>
            <ServiceIcon
              src="./Assets/Icons/Final/RadonServices.png"
              alt="Radon Inspections Icon"
            />
            <p>Radon Inspections</p>
          </ServiceDiv>
          <ServiceDiv>
            <ServiceIcon
              src="./Assets/Icons/Final/DroneServices.png"
              alt="Drone Inspections Icon"
            />
            <p>Drone Inspections</p>
          </ServiceDiv>
        </MainServicesDiv>

        <h2>Also Offering:</h2>
        <MoreServicesDiv>
          <p>Exterior Inspections</p>
          <p>Interior Inspections</p>
          <p>Structure Inspections</p>
          <p>Chimney Inspections</p>
          <p>Heating Inspections</p>
          <p>AC Inspections</p>
          <p>Pool Inspections</p>
          <p>Spa Inspections</p>
          <p>Mold Inspections</p>
          <p>Tiny Home Inspections</p>
          <p>Log Home Inspections</p>
          <p>Manufactured Inspections</p>
          <p>and More</p>
        </MoreServicesDiv>
      </ServicesContentDiv>
      <br />

      <Link activeClass="active" to="contact" spy={true} smooth={true}>
        <MoreInfoButton>Contact Me For More Information</MoreInfoButton>
      </Link>
    </ServicesDiv>
  );
};

export default Services;
