import "./listing.css";
import { useParams } from "react-router-dom";
import { sampleData } from "../../../sample-data";
import { currency } from "../listing-item/ListingItem";

const stats = ["beds", "baths", "sqft", "price"];

const Listing = () => {
  const { listingId } = useParams();
  const listing = sampleData.find((data) => data.address === listingId);
  return (
    <div id="listing">
      <div id="listing-container">
        <div id="listing-header-text">
          <div>
            <h1>{listing.address}</h1>
            <h2>{listing.city}</h2>
          </div>
          <div>
            <h3>{listing.description}</h3>
          </div>
        </div>
        <div id="listing-stats">
          <h1>Details</h1>
          <div id="stats">
            {stats.map((stat, index) => (
              <div key={index} className="listing-stat-item">
                <p>{stat}</p>
                <p>
                  {stat === "price"
                    ? currency.format(listing[stat])
                    : listing[stat]}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div id="listing-photos">
          <div id="listing-photos-container">
            {listing.photos.map((url, index) => (
              <img
                className="listing-photos"
                src={url}
                alt={index}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
