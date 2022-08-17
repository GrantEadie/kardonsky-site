import "./listings-body.css";
import { sampleData } from "../../sample-data.js";
import ListingItem from "./listing-item/ListingItem";

const ListingsBody = () => {
  return (
    <div id="listings-holder">
      <div id="listings-body">
        <div id="listings-title">featured properties</div>
        <div id="listings-items-container">
          {sampleData.map((data, index) => (
            <ListingItem data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingsBody;