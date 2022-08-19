import { sellerData } from "./sellerData";

function Sellers() {
  return (
    <>
      {sellerData.map((card, index) => (
        <div className="process-card" key={index}>
          <div className="process-card-title">
            <span>{card.title}</span> {card.icon}
          </div>
          <div className="process-card-body">{card.body}</div>
        </div>
      ))}
    </>
  );
}

export default Sellers;
