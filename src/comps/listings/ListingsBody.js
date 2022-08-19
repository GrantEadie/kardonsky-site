import "./listings-body.css";
import { sampleData } from "../../sample-data.js";
import ListingItem from "./listing-item/ListingItem";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import CreateListingButton from "./create-listing-button/CreateListingButton";

const ListingsBody = () => {
  let navigate = useNavigate();
  const { user } = useOutletContext();

  return (
    <div id="listings-holder">
      <div id="listings-body">
        <div id="listings-title">current properties</div>
        <div id="listings-items-container">
          {user && <CreateListingButton />}

          {sampleData.map((data, index) => (
            <div
              key={index}
              onClick={() => navigate(`/listings/${data.address}`)}
            >
              <ListingItem data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingsBody;
