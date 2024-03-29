import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "./swiper-gallery.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { useRef } from "react";

const SwiperGallery = ({ urls, setShowGallery, currentFocusedImage }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => setShowGallery(false));
  return (
    <div className="swiper-gallery">
      <Swiper
        initialSlide={`${currentFocusedImage}`}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        ref={ref}
      >
        {urls.map((url, index) => (
          <SwiperSlide className="swiper-slide-holder" key={index}>
            <img src={url} alt={`${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperGallery;
