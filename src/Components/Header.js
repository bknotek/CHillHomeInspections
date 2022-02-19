import styled from "@emotion/styled";
import { Link } from "react-scroll";
import { SideBySideMagnifier } from "react-image-magnifiers";

const Header = () => {
  const HeaderDiv = styled.div`
    width: 100%;
    position: fixed;
    z-index: 1;
    -webkit-filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
  `;

  const InfoBarDiv = styled.div`
    width: 100%;
    height: 40px;
    background-color: #f0653a;

    p {
      margin: 0px;
      color: white;
      font-weight: bold;
      font-size: 30px;
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }

    @media (max-width: 650px) {
      p {
        font-size: 16px;
        padding-top: 10px;
      }
    }
  `;

  const NavBarDiv = styled.div`
    width: 100%;
    height: 100px;
    background-color: white;

    @media (max-width: 650px) {
      display: none;
    }
  `;

  const NavBar = styled.div`
    margin: 0px;
    width: 100%;

    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    list-style-type: none;

    li {
      margin-top: 30px;
      margin-right: 35px;
      cursor: pointer;

      &:hover {
        color: #f0653a;
      }
    }

    @media (max-width: 950px) {
      font-size: 14px;
    }
  `;

  const LogoImg = styled.img`
    width: 200px;
    margin-top: -30px;
  `;

  const MobileNavBarDiv = styled.div`
    display: none;

    @media (max-width: 650px) {
      display: inline;
    }
  `;

  const MobileLogoDiv = styled.div`
    width: 100%;
    height: 100px;
    background-color: white;

    img {
      width: 250px;
      margin-top: 10px;
    }
  `;

  const MobileNavDiv = styled.div`
    width: 100%;
    height: 30px;
    background-color: white;
    cursor: pointer;
    margin: 0px;
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    font-weight: bold;
    padding-top: 20px;

    li {
      &:hover {
        color: #f0653a;
      }
    }
  `;

  return (
    <HeaderDiv>
      <InfoBarDiv>
        <a href="tel:408-409-0857">
          <p>CALL FOR A FREE QUOTE: (408) 409-0857</p>
        </a>
      </InfoBarDiv>
      <NavBarDiv>
        <NavBar>
          <li>
            <Link activeClass="active" to="about" spy={true} smooth={true}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="services" spy={true} smooth={true}>
              SERVICES
            </Link>
          </li>

          <li>
            <a href="/index.html">
              <LogoImg src="./Assets/LOGO-top2.png"></LogoImg>
            </a>
          </li>

          <li>REVIEWS</li>
          <li>
            <Link activeClass="active" to="contact" spy={true} smooth={true}>
              CONTACT
            </Link>
          </li>
        </NavBar>
      </NavBarDiv>
      <MobileNavBarDiv>
        <MobileLogoDiv>
          <a href="/index.html">
            <LogoImg src="./Assets/LOGO-top2.png" alt="Top Logo"></LogoImg>
          </a>
        </MobileLogoDiv>

        <MobileNavDiv>
          <li>
            <Link activeClass="active" to="about" spy={true} smooth={true}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="services" spy={true} smooth={true}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="" spy={true} smooth={true}>
              REVIEWS
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="contact" spy={true} smooth={true}>
              CONTACT
            </Link>
          </li>
        </MobileNavDiv>
      </MobileNavBarDiv>
    </HeaderDiv>
  );
};

export default Header;
