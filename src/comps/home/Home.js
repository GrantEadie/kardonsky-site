import Listings from "../listings/Listings";
import "./home.css";

const Home = () => {
  return (
    <div id="home-container">
      <div id="hero-holder" className="home">
        <img
          id="hero-img"
          src="https://firebasestorage.googleapis.com/v0/b/kardonsky-site.appspot.com/o/travis-grossen-K1iqi58F4Qw-unsplash.jpeg?alt=media&token=4c310088-5f99-464e-b142-a0ec8a3e8598"
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
