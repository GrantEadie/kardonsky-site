import "./listings.css";
import { sampleData } from "../../sample-data.js";
import ListingItem from "./listing-item/ListingItem";

const Listings = () => {
  return (
    <div id="listings-holder">
      <div id="listings-page">
        <div id="listings-title">featured homes</div>
        <div id="listings-items-container">
          {sampleData.map((data, index) => (
            <ListingItem data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;
