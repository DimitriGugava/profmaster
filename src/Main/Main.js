import "./Main.css";
import MenuScroll from "../icons/menuScroll.svg";
import logo from "../icons/logo.svg";
import planImage from "../icons/planImage.jpg";
import close from "../icons/close.svg";
import { useState } from "react";
import Projects from "./Projects/Projects";
import { Link } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import Contact from "../Contact/Contact";
import backgrounddesktop from "../icons/backgrounddesktop.jpg";
const Main = () => {
  const [moreInfo, setMoreInfo] = useState(true);
  const [menu, setMenu] = useState(true);
  const [seeProjects, setSeeProjects] = useState(false);
  const moreInfoButton = () => {
    return setMoreInfo(!moreInfo);
  };
  const optionClick = () => {
    return setMenu(!menu);
  };

  const checkProjects = () => {
    return setSeeProjects(seeProjects);
  };
  return (
    <div className="mainContainer">
      <div className="backEffect"> </div>
      {moreInfo && <img src={backgrounddesktop} className="backImage" />}
      <img src={logo} className="companyLogo" alt="profmaster logo" />
      {menu ? (
        <img
          src={MenuScroll}
          className="menuScroll"
          alt="Menu Button"
          onClick={optionClick}
        />
      ) : (
        <>
          <img
            className="menuScroll"
            alt="close Button"
            src={close}
            onClick={optionClick}
          />
          <div className="options">
            <Link style={{ textDecoration: "none" }} to="/projects">
              <div className="optionListWrap">
                <p className="optionList" onClick={checkProjects}>
                  ჩვენი პროექტები
                </p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/prices">
              <div className="optionListWrap">
                <p className="optionList">ფასები</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/contact">
              <div className="optionListWrap">
                <p className="optionList">კონტაქტი</p>
              </div>
            </Link>
          </div>
        </>
      )}
      <div className="desktopOptionsBox">
        <Link style={{ textDecoration: "none" }} to="/projects">
          <p className="optionListDesktop" onClick={checkProjects}>
            ჩვენი პროექტები
          </p>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/prices">
          <p className="optionListDesktop">ფასები</p>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/contact">
          <p className="optionListDesktop">კონტაქტი</p>
        </Link>
      </div>
      {menu ? (
        <>
          {moreInfo ? (
            <div className="ContentPart">
              <h1 className="headerText">პროფმასტერი შენს სამსახურში</h1>
              <div className="textBack">
                <p className="secondaryText">
                  პროფმასტერი გთავაზობთ სრულ სარემონტო სამუშაოებს
                </p>
                <div className="seeMore" onClick={moreInfoButton}>
                  გაიმე მეტი
                </div>
              </div>
            </div>
          ) : (
            <div className="moreContentPart">
              <div className="moreTextBack">
                <ol>
                  <ul className="moreText">
                    ვაწარმოებთ სამუშაოებს პროექტისა და დიზაინის მიხედვით
                  </ul>
                </ol>
              </div>
              <div className="moreTextBack">
                <ol>
                  <ul className="moreText">
                    შეგვიძლია ვიმუშაოთ, როგორც თქვენი ასევე ჩვენი მასალებით
                  </ul>
                </ol>
              </div>
              <div className="moreTextBack">
                <ol>
                  <ul className="moreText">
                    ვიღებთ სრულ პასუხისმგებლობას შესრულებულ სამუშაოებზე
                  </ul>
                </ol>
              </div>
              <div className="moreTextBack">
                <ol>
                  <ul className="moreText">
                    ანგარიშსწორება მხოლოდ საქმის დასრულების შემდგომ
                  </ul>
                </ol>
              </div>
              <div className="moreSeeMore" onClick={moreInfoButton}>
                დაბრუნდი მთავარზე
              </div>
            </div>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};
export default Main;
