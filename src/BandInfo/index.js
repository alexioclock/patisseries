import "./bandinfo.scss";
import Bicycle from '../assets/images/svg/bicycle.svg';
import Gift from '../assets/images/svg/gift.svg';
import Food from '../assets/images/svg/food.svg';



function BandInfo() {
  return (
      <div className="bandInfo">
          <div className="column">
              <img src={Gift} alt="bicycle"></img>
              <h3>Click and Collect</h3>
              <p>Commander et récupérer sur place</p>
            </div>
          <div className="column">
              <img src={Bicycle} alt="bicycle"></img>
              <h3>Livraison</h3>
              <p>Depuis notre application mobile</p>
          </div>
          <div className="column">
              <img src={Food} alt="bicycle"></img>
              <h3>Consommation sur place</h3>
              <p>un  étage pour déguster sur place</p>
          </div>

      </div>
  );
}

export default BandInfo;
