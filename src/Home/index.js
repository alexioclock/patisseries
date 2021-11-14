import "./home.scss"
import Navigation from "../Navigation";
import logo from "../assets/images/svg/logo.svg"

function Home() {
  return (
    <div className="home" id="/">
      <Navigation />
      <div className="title-home-container">
        <h1>Maison Le Nôtre</h1>
        <img src={logo} />
        <p>Conception de pâtisseries inchangées depuis 1902</p>
        <p>Des saveurs raffinées, sucrées et subtilement parfumées </p>
      </div>
    </div>
  );
}

export default Home;
