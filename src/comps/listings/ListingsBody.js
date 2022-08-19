import "./listings-body.css";
import { sampleData } from "../../sample-data.js";
import ListingItem from "./listing-item/ListingItem";
import { useNavigate } from "react-router-dom";

const ListingsBody = () => {
  let navigate = useNavigate();
  return (
    <div id="listings-holder">
      <div id="listings-body">
        <div id="listings-title">current properties</div>
        <div id="listings-items-container">
          {sampleData.map((data, index) => (
            <div onClick={() => navigate(`/listings/${data.address}`)}>
              <ListingItem
                data={data}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingsBody;
