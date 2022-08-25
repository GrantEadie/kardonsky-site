import "swiper/css";
import "./listing-item.css";
import currency from "currency.js";

export let toCurrency = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

const ListingItem = ({ data }) => {
  const {
    address,
    city,
    bedrooms,
    bathrooms,
    sqft,
    price,
    coverImage,
    acres,
    images,
  } = data;
  return (
    <div className="listing-item-holder">
      <div>
        <img
          className="listing-photos"
          src={!coverImage ? images[0] : coverImage}
          alt={address}
        />
      </div>
      <div className="listing-item-title">
        <div className="listing-city">{city}</div>
        <div className="listing-address">{address}</div>
      </div>
      <div className="listing-item-body">
        <div className="listing-details-holder">
          <div className="listing-detail">
            <div>{bedrooms}</div>
            <div>BED</div>
          </div>
          <div className="listing-detail">
            <div>{bathrooms}</div>
            <div>BATH</div>
          </div>
          <div className="listing-detail">
            <div>{sqft}</div>
            <div>SQFT</div>
          </div>
          <div className="listing-detail">
            <div>{acres}</div>
            <div>ACRES</div>
          </div>
        </div>
        <div className="listing-price">
          <div className="listing-activity">SOLD</div>
          {currency(price, { fromCents: true, precision: 0 }).format()}
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
