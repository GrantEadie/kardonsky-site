import "./listing.css";
import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toCurrency } from "../listing-item/ListingItem";
import useGetDocs from "../../../hooks/useFirestore";
import { deleteDocument } from "../../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";

const stats = ["bedrooms", "bathrooms", "sqft", "price"];

const Listing = () => {
  const { listingId } = useParams();
  let navigate = useNavigate();
  const { user } = useOutletContext();
  const { docs } = useGetDocs("listings");
  const listing = docs.find((data) => data.id === listingId);

  const handleDeleteClick = (listingId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this listing? This can't be undone."
      )
    ) {
      deleteDocument("listings", listingId);
      navigate(`/listings/`);
      window.scrollTo(0, 0);
    }
  };

  const handleClickEdit = () => {
    navigate(`/listings/edit/${listingId}`);
    window.scrollTo(0, 0);
  };

  return (
    <div id="listing">
      {!listing ? (
        <div className="loading">
          <div className="dot-fire"></div>
        </div>
      ) : (
        <div id="listing-container">
          <div id="listing-header-text">
            <div>
              <h1>{listing.address}</h1>
              <h2>{listing.city}</h2>
            </div>
            <div>
              <h3>{listing.description}</h3>
            </div>
          </div>
          <div id="listing-stats">
            <h1>Details</h1>
            <div id="stats">
              {stats.map((stat, index) => (
                <div key={index} className="listing-stat-item">
                  <p>{stat}</p>
                  <p>
                    {stat === "price"
                      ? toCurrency.format(listing[stat])
                      : listing[stat]}
                  </p>
                </div>
              ))}
              {listing.sold ? <div className="sold-sign">SOLD</div> : null}
            </div>
          </div>
          <div id="listing-photos">
            <div id="listing-photos-container">
              {listing.images.map((url, index) => (
                <img
                  className="listing-photos"
                  src={url}
                  alt={index}
                  key={index}
                />
              ))}
            </div>
          </div>
          {user && (
            <div className="listing-admin">
              <button
                className="edit btn-dark"
                onClick={() => handleClickEdit()}
              >
                Edit
              </button>
              <button
                className="delete"
                onClick={() => handleDeleteClick(listingId)}
              >
                Delete this listing
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Listing;
