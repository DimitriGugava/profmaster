import "./Projects.css";
import Contact from "../../Contact/Contact";
import logo from "../../icons/logo.svg";
import { Link } from "react-router-dom";
import before from "../../icons/before.jpg";
import after from "../../icons/after.jpg";
import checkvideo from "../../icons/checkvideo.svg";
import { useState } from "react";
import close from "../../icons/close.svg";
import data from "../../data.json";
const Projects = () => {
  const [showVideo, setShowVideo] = useState(false);
  const watchVideo = () => {
    return setShowVideo(!showVideo);
  };
  data.filter((info) => {
    return info.project;
  });
  console.log(data);
  return (
    <div className="projectMainContainer">
      <div className="projectsBackEffect"> </div>
      <Link style={{ textDecoration: "none" }} to="/">
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
          </div>
        </>
      )}
      {showVideo && (
        <div className="fix">
          <img src={close} className="closeVideo" onClick={watchVideo} />
          <div className="AboutplayerBox">
            <iframe
              className="Aboutplayer"
              src="https://www.youtube.com/embed/1CUsKuwqRx8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
      <div className="line"></div>
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="goBackToMain">დაბრუნდი მთავარზე</div>{" "}
      </Link>
      <div className="projectListCont">
        {data.map((data) => (
          <div className="projectBox">
            <h2 className="costumerTitle">{data.title}</h2>
            <div className="box">
              <img className="before" src={data?.photos?.before.large} />
              <img className="after" src={data?.photos?.after.large} />
            </div>
            <div className="customerInfo">
              <a className="infoText">{data.address}</a>
              <ul>
                <li className="infoText">{data.whatwedid}</li>
                <li className="infoText">{data.whatwedid2}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
