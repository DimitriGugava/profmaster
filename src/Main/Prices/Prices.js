import "./Prices.css";
import logo from "../../icons/logo.svg";
const Prices = () => {
  return (
    <div className="pricesContainer">
      <div className="pricesBackEffect"> </div>
      <img src={logo} className="PricesCompanyLogo" alt="profmaster logo" />
      <div className="priceListBox">
        <div className="priceList">ფასები:</div>
      </div>
    </div>
  );
};

export default Prices;
