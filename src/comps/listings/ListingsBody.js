import "./listings-body.css";
import ListingItem from "./listing-item/ListingItem";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import CreateListingButton from "./create-listing-button/CreateListingButton";
import useGetDocs from "../../hooks/useFirestore";

const ListingsBody = () => {
  let navigate = useNavigate();
  const { user } = useOutletContext();
  const { docs } = useGetDocs("listings");

  const goToListing = (address) => {
    navigate(`/listings/${address}`);
    window.scrollTo(0, 0);
  };

  return (
    <div id="listings-holder">
      {docs.length ? (
        <>
          <div id="listings-title">current properties</div>
          <div id="listings-body">
            <div id="listings-items-container">
              {user && <CreateListingButton />}
              {docs.map((data, index) => (
                <div key={index} onClick={() => goToListing(data.id)}>
                  <ListingItem data={data} />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="loading">
          <div className="dot-fire"></div>
        </div>
      )}
      <div id="listings-blank-col"></div>
    </div>
  );
};

export default ListingsBody;
