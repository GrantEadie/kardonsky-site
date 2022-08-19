import "./create-listing-button.css";
import { Plus } from "phosphor-react";

const CreateListingButton = () => {
  return (
    <div id="create-list-button">
      <Plus />
      <p>Add New Listing</p>
    </div>
  );
};

export default CreateListingButton;
