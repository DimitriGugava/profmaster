import facebook from "../icons/facebook.svg";
import instagram from "../icons/instagram.svg";
import youtube from "../icons/youtube.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="bottomContainer">
        <p className="contactInfo">ტელ: +995 598 98 43 58</p>
        <div className="socialNets">
          <a
            href="https://www.facebook.com/profile.php?id=100088084497322"
            target="_blank"
          >
            <img src={facebook} className="socialNetIcons" alt="socialNet" />
          </a>
          <a href="https://www.instagram.com/prf.master/" target="_blank">
            <img src={instagram} className="socialNetIcons" alt="socialNet" />
          </a>
          <a href="https://www.youtube.com/@Prf.master/videos" target="_blank">
            <img src={youtube} className="socialNetIcons" alt="socialNet" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
