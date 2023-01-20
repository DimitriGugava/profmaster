import "./Main.css";
import MenuScroll from "../icons/menuScroll.svg";
import logo from "../icons/logo.svg";
import planImage from "../icons/planImage.jpg";

import { useState } from "react";
const Main = () => {
  const [moreInfo, setMoreInfo] = useState(true);

  const moreInfoButton = () => {
    return setMoreInfo(false);
  };
  return (
    <div className="mainContainer">
      <div className="backEffect"> </div>
      {moreInfo && <img src={planImage} className="backImage" />}

      <img src={logo} className="companyLogo" alt="profmaster logo" />
      <img src={MenuScroll} className="menuScroll" alt="Menu Button" />
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
                ვაწარმოოთ სამუშაოები პროექტის და დიზაინის მიხედვით
              </ul>
            </ol>
          </div>
          <div className="moreTextBack">
            <ol>
              <ul className="moreText">
                ვიმუშაოთ როგორც თქვენი ასევე ჩვენი მასალებით
              </ul>
            </ol>
          </div>
          <div className="moreTextBack">
            <ol>
              <ul className="moreText">
                ავიღოთ სრული პასუხისმგებლობა შესრულებულ სამუშაოებზე
              </ul>
            </ol>
          </div>
          <div className="moreTextBack">
            <ol>
              <ul className="moreText">
                მოვითხოვოთ ანგარიშსწორება მხოლოდ საქმის დასრულების შემდგომ
              </ul>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};
export default Main;
