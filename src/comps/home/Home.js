import Listings from "../listings/Listings";
import "./home.css";

const Home = () => {
  return (
    <div id="home-container">
      <div id="hero-holder" className="home">
        <img
          id="hero-img"
          src="https://firebasestorage.googleapis.com/v0/b/kardonsky-site.appspot.com/o/valeriekardonsky9.png?alt=media&token=43f3e294-4cb6-4d3c-bf47-5901977eb7e4"
          alt="hero-page"
        />
        <div id="hero-text">
          <div id="hero-desc">Methow Valley Real Estate Broker</div>
          <div id="hero-title">Start living your Methow dream</div>
        </div>
      </div>
      <Listings />
    </div>
  );
};

export default Home;
