import "swiper/css";
import "./listing-item.css";
import { Swiper, SwiperSlide } from "swiper/react";

let currency = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const ListingItem = ({ data }) => {
  const { address, city, beds, baths, sqft, price, photos } = data;
  return (
    <div className="listing-item-holder">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {photos.map((url, index) => (
          <SwiperSlide key={index}>
            <img className="listing-photos" src={url} alt={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="listing-item-title">
        <div className="listing-city">{city}</div>
        <div className="listing-address">{address}</div>
      </div>
      <div className="listing-item-body">
        <div className="listing-details-holder">
          <div className="listing-detail">
            <div>{beds}</div>
            <div>BED</div>
          </div>
          <div className="listing-detail">
            <div>{baths}</div>
            <div>BATH</div>
          </div>
          <div className="listing-detail">
            <div>{sqft}</div>
            <div>SQFT</div>
          </div>
        </div>
        <div className="listing-price">{currency.format(price)}</div>
      </div>
    </div>
  );
};

export default ListingItem;
