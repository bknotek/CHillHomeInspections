import styled from "@emotion/styled";

const Contact = () => {
  const ContactDiv = styled.div`
    height: 1600px;
    width: 100%;
    background-color: white;
    padding-top: 150px;
    margin-top: -50px;

    @media (max-width: 650px) {
      padding-top: 200px;
      margin-top: -150px;
    }
  `;

  const ContactBannerDiv = styled.div`
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

  const ContactContentDiv = styled.div`
    width: 900px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;

    a {
      text-decoration: none;
      color: black;
    }

    @media (max-width: 950px) {
      width: 600px;
    }

    @media (max-width: 650px) {
      width: 300px;
    }
  `;

  const PhoneNumberDiv = styled.div`
    width: 500px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;

    p {
      font-size: 12px;
      margin-bottom: -20px;
      margin-top: 0px;
      color: #f0653a;
      font-weight: bold;
    }

    a {
      font-size: 30px;
      margin-bottom: -20px;
      margin-top: 0px;
    }

    @media (max-width: 950px) {
    }

    @media (max-width: 650px) {
      width: 300px;
    }
  `;

  const EmailNumberDiv = styled.div`
    width: 500px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;

    p {
      font-size: 20px;
      margin-bottom: -20px;
      margin-top: -30px;
    }

    @media (max-width: 950px) {
    }

    @media (max-width: 650px) {
      width: 300px;
    }
  `;

  const BusinessHoursDiv = styled.div`
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;

    h1 {
      color: #color: #f0653a;
      font-size: 50px;
    }

    p {
      font-weight: bold;
    }

    @media (max-width: 950px) {
      width: 300px;
    }
  `;

  const CallOrText = styled.p`
    color: #f0653a;
    font-size: 50px;
  `;

  const Map = styled.iframe`
    border-radius: 23px;
    margin-top: 20px;
    border: 5px solid #f0653a;

    @media (max-width: 950px) {
      width: 550px;
      height: 400px;
    }

    @media (max-width: 650px) {
      width: 300px;
      height: 400px;
    }
  `;

  return (
    <ContactDiv id="contact">
      <ContactBannerDiv>
        <BannerTextDiv>Contact Me Today</BannerTextDiv>
        <BannerLogoDiv>
          <BannerLogoImg
            src="./Assets/BANNER_LOGO.png"
            alt="Banner_Logo"
          ></BannerLogoImg>
        </BannerLogoDiv>
      </ContactBannerDiv>
      <ContactContentDiv>
        <PhoneNumberDiv>
          <a href="tel:408-409-0857">
            <img
              src="./Assets/Icons/Final/PHONE_ICON.png"
              alt="Phone Number Icon"
              width="150px"
            />
          </a>
          <br />
          <a href="tel:408-409-0857">(408) 409-0857</a>

          <p>call or text</p>
        </PhoneNumberDiv>
        <EmailNumberDiv>
          <a href="mailto:clyde@hillshomeinspection.com">
            <img
              src="./Assets/Icons/Final/EMAIL_ICON.png"
              alt="Phone Number Icon"
              width="150px"
            />
          </a>
          <a href="mailto:clyde@hillshomeinspection.com">
            <p>clyde@hillshomeinspection.com</p>
          </a>
        </EmailNumberDiv>
        <BusinessHoursDiv>
          <h1>Business Hours</h1>
          <p>Sunday: 9 AM - 6PM</p>
          <p>Monday: 9 AM - 6PM</p>
          <p>Tuesday: 9 AM - 6PM</p>
          <p>Wednesday: 9 AM - 6PM</p>
          <p>Thursday: 9 AM - 6PM</p>
          <p>Friday: 9 AM - 6PM</p>
          <p>Saturday: 9 AM - 6PM</p>
        </BusinessHoursDiv>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102070.99520917765!2d-121.8496570426977!3d36.92099199077517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c1ba77c6212d278!2sHill&#39;s%20Home%20Inspection!5e0!3m2!1sen!2sus!4v1615854480268!5m2!1sen!2sus"
          width="850"
          height="450"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          title="Map"
        ></Map>
      </ContactContentDiv>
    </ContactDiv>
  );
};

export default Contact;
