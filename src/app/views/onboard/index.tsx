import "./Onboard.scss";
import firstHero from "../../../assets/img/3.png";
import arrowHeadG from "../../../assets/img/4.png";
import MKolay from "../../../assets/img/5.png";
import arrowHeadK from "../../../assets/img/6.png";
import secondHero from "../../../assets/img/7.png";
import MKolayKant from "../../../assets/img/8.png";
import { useNavigate } from "react-router-dom";

const Onboard = () => {
  const navigate = useNavigate();

  return (
    <div className="onboard">
      <div
        className="onboard-container"
        onClick={() => navigate("/mkolay/onboard")}
      >
        <img className="hero-img" src={firstHero} />
        <div className="onboard-c-c">
          <div className="onboard-c-m">
            <img alt="onboard-pic" src={MKolay} />
            <img alt="onboard-pic" src={arrowHeadG} />
          </div>
          <div className="onboard-c-d">
            <p>
              Mkolay Mağaza ile ürünlerinizi kolayca okutun, <b>JetKasa</b> ile
              ödeyin.
            </p>
          </div>
        </div>
      </div>
      <div className="onboard-container">
        <img className="hero-img" src={secondHero} />
        <div className="onboard-c-c">
          <div className="onboard-c-m">
            <img alt="onboard-pic" src={MKolayKant} />
            <img alt="onboard-pic" src={arrowHeadK} />
          </div>
          <div className="onboard-c-d">
            <p>
              Mkolay Kantin ile ürünlerinizi kolayca okutun, telefonunuzdan
              ödeyin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboard;
