import "./Projects.css";
import Contact from "../../Contact/Contact";
import logo from "../../icons/logo.svg";
import { Link } from "react-router-dom";
import before from "../../icons/before.jpg";
import after from "../../icons/after.jpg";
import checkvideo from "../../icons/checkvideo.svg";
import { useState } from "react";
import close from "../../icons/close.svg";
const Projects = () => {
  const [showVideo, setShowVideo] = useState(false);
  const watchVideo = () => {
    return setShowVideo(!showVideo);
  };
  return (
    <div className="projectMainContainer">
      <div className="projectsBackEffect"> </div>
      <Link style={{ textDecoration: "none" }} to="/main">
        <img src={logo} className="companyLogo" alt="profmaster logo" />
      </Link>
      {!showVideo && (
        <>
          <img
            className="checkvideoIcon"
            src={checkvideo}
            onClick={watchVideo}
          />
          <div className="watchVideo" onClick={watchVideo}>
            იხილეთ ჩვენი ვიდეო რგოლი
          </div>{" "}
        </>
      )}
      {showVideo && (
        <div className="fix">
          <img src={close} className="closeVideo" onClick={watchVideo} />
          <div className="AboutplayerBox">
            <iframe
              className="Aboutplayer"
              src="https://www.youtube.com/embed/MeK46abkwNI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
      <div className="line"></div>

      <div className="projectListCont">
        <div className="projectBox">
          <h2 className="costumerTitle">Coca-Cola</h2>
          <div className="box">
            <img className="before" src={before} />
            <img className="after" src={after} />
          </div>
          <div className="customerInfo">
            <a className="infoText">თბილისი, დიდი დიღომი</a>
            <ul>
              <li className="infoText">რა გაკეთდა</li>
              <li className="infoText">რა გაკეთდა</li>
              <li className="infoText">რა გაკეთდა</li>
              <li className="infoText">რა გაკეთდა</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="projectListCont">
        <div className="projectBox">
          <h2 className="costumerTitle">Coca-Cola</h2>
          <div className="box">
            <img className="before" src={before} />
            <img className="after" src={after} />
          </div>
          <div className="customerInfo">
            <a className="infoText">თბილისი, დიდი დიღომი</a>
            <ul>
              <li className="infoText">რა გაკეთდა</li>
              <li className="infoText">რა გაკეთდა</li>
              <li className="infoText">რა გაკეთდა</li>
              <li className="infoText">რა გაკეთდა</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="projectListCont">
        <div className="projectBox">
          <h2 className="costumerTitle">Coca-Cola</h2>
          <div className="box">
            <img className="before" src={before} />
            <img className="after" src={after} />
          </div>
          <div className="customerInfo">
            <a className="infoText">თბილისი, დიდი დიღომი</a>
            <ul>
              <li className="infoText">რა გაკეთდა</li>
              <li className="infoText">რა გაკეთდა</li>
              <li className="infoText">რა გაკეთდა</li>
              <li className="infoText">რა გაკეთდა</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
