import "./create-listing-button.css";
import { Plus } from "phosphor-react";
import { useNavigate } from "react-router-dom";


const CreateListingButton = () => {
  const navigate = useNavigate();

  const goToCreateListing = () => {
    navigate(`/new-listing`);
    window.scrollTo(0, 0);
  };

  return (
    <div id="create-list-button" onClick={() => goToCreateListing()}>
      <Plus />
      <p>Add New Listing</p>
    </div>
  );
};

export default CreateListingButton;
