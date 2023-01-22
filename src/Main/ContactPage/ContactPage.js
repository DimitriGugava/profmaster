import "./ContactPage.css";
import logo from "../../icons/logo.svg";
import { Link } from "react-router-dom";
import facebook from "../../icons/facebook.svg";
import instagram from "../../icons/instagram.svg";
const ContactPage = () => {
  return (
    <div className="contactContainer">
      <div className="contactBackEffect"> </div>
      <h1 className="contactHeader">პროფმასტერი თქვენი სანდო პარტნიორი</h1>
      <Link style={{ textDecoration: "none" }} to="/">
        <img src={logo} className="contactCompanyLogo" alt="profmaster logo" />
      </Link>
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="contactGoBackToMain">დაბრუნდი მთავარზე</div>
      </Link>
      <div className="contactBox">
        <p className="contactPageText">
          ტელეფონი: +995 551 164 222 - ალექსანდრე
        </p>
        <p className="contactPageText">ტელეფონი: +995 598 98 43 58 - გიორგი </p>
        <p className="contactPageText">მეილი: giorgi.oniani.1@gmail.com</p>
        <p className="contactPageText">
          ასევე დაგვიკავშირდით ჩვენი სოც-ქსელების მეშვეობით:
        </p>{" "}
        <div className="socialNetBox">
          <a
            href="https://www.facebook.com/profile.php?id=100088084497322"
            target="_blank"
          >
            <img
              src={facebook}
              className="contactSocialNetIcons"
              alt="socialNet"
            />
          </a>
          <a href="https://www.instagram.com/prf.master/" target="_blank">
            <img
              src={instagram}
              className="contactSocialNetIcons"
              alt="socialNet"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
