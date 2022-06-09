import { buyerData } from "./buyer-data";

function Buyers() {
  return (
    <>
      {buyerData.map((card, index) => (
        <div className="process-card" key={index}>
          {card.icon}
          <div className="process-card-title">{card.title}</div>
          <div className="process-card-body">{card.body}</div>
        </div>
      ))}
    </>
  );
}

export default Buyers;
