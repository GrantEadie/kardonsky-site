import { buyerData } from "./buyer-data";

function Buyers() {
  return (
    <>
      {buyerData.map((card, index) => (
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

export default Buyers;
