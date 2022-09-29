import ListingsBody from "../listings/ListingsBody";
import "./home.css";

const Home = () => {
  return (
    <div id="home-container">
      <div id="hero-holder" className="home">
        <img
          id="hero-img"
          src="https://images.unsplash.com/photo-1556046858-0c109614642b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="hero-page"
        />
        <div id="hero-text">
          <div id="hero-desc">Methow Valley Real Estate Broker</div>
          <div id="hero-title">Live your Methow Dream</div>
        </div>
      </div>
      <ListingsBody />
    </div>
  );
};

export default Home;
