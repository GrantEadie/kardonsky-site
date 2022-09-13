import {useState} from 'react';
import "./process.css";
import Buyers from './buyers/Buyers';
import Sellers from './sellers/Sellers';



const Process = () => {
  const [seller, setSeller] = useState(false);
  return (
    <div id="process-page-holder">
      <div id="process-page">
        <div className="page-header-container">
          <img
            className="page-header-img"
            src="https://images.unsplash.com/photo-1521488357999-ff03ac2b5fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="hero-page"
          />
          <div className="page-header-text">
            <h2>here's how it all comes together</h2>
            <h1>the process</h1>
            <div className="page-header-buttons">
              <button className={!seller ? "selected" : null} onClick={() => setSeller(false)}>buyers</button>
              <button className={seller ? "selected" : null} onClick={() => setSeller(true)}>sellers</button>
            </div>
          </div>
        </div>
        <div id="process-body">
          <div className="process-cards-holder">
            {seller ? <Sellers /> : <Buyers />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
