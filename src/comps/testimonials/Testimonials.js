import { Star } from "phosphor-react";
import { data } from "./testimonialData";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>Previous happy clients</h1>
      {data.map((card, index) => (
        <div className="testimonial-card" key={index}>
          <h2>
            {card.name}
            <span className="five-stars">
              {[...Array(5)].map((star, index) => (
                <Star key={index} weight="fill" />
              ))}
            </span>
          </h2>
          <p>{card.review}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
