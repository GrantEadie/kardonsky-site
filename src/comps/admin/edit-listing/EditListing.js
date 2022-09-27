import "./edit-listing.css";
import { useEffect, useState } from "react";
import { ArrowRight } from "phosphor-react";
import { getStuff, updateDocument } from "../../../hooks/useFirestore";
import UploadForm from "../upload/UploadMultiple";
import UploadImageGrid from "../upload/UploadImageGrid";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const inputs = [
  "address",
  "city",
  "bedrooms",
  "bathrooms",
  "sqft",
  "price",
  "acres",
];

const EditListing = () => {
  const { listingId } = useParams();
  const [docs, setDocs] = useState([]);
  const listing = docs.find((data) => data.id === listingId);
  const [newDocument, setNewDocument] = useState({});
  const [docId] = useState(listingId);
  const [urls, setURLs] = useState([]);
  const [currentlyUploading, setCurrentlyUploading] = useState(1);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const gotDocs = await getStuff("listings");
      setDocs(gotDocs.sort((a, b) => a.createdAt - b.createdAt));
    };
    fetchData();
  }, [setDocs]);

  useEffect(() => {
    if (listing) {
      setURLs(listing.images);
    }
  }, [setURLs, listing]);

  const handleNewDocumentChange = (e) => {
    const key = e.target.name;
    let value = e.target.value;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    setNewDocument({ ...newDocument, [key]: value });
  };

  const setCoverImage = (url) => {
    setNewDocument({ ...newDocument, coverImage: url });
  };

  const handleEditClick = () => {
    updateDocument("listings", listingId, newDocument);
    navigate(`/listings/${listingId}`);
  };

  return (
    <div id="create-listing">
      {!listing ? (
        <div className="loading">
          <div className="dot-fire"></div>
        </div>
      ) : (
        <div id="create-listing-holder">
          <div id="create-listing-body">
            <div className="create-listing-col">
              <div className="create-listing-title">
                Create a new <b>Listing</b>
              </div>
              <div className="create-listing-form">
                {inputs.map((input, index) => (
                  <input
                    type="text"
                    placeholder={input}
                    name={input}
                    onChange={(e) => handleNewDocumentChange(e)}
                    key={index}
                    defaultValue={listing[input]}
                  />
                ))}
                <textarea
                  type="text"
                  placeholder={"description"}
                  name={"description"}
                  onChange={(e) => handleNewDocumentChange(e)}
                  defaultValue={listing.description}
                />
                <div className="checkbox-circle2">
                  <input
                    type="checkbox"
                    id="checkbox-circle2"
                    name="sold"
                    onChange={(e) => handleNewDocumentChange(e)}
                    checked={listing.sold}
                  />
                  <label htmlFor="checkbox-circle2">Sold?</label>
                </div>
              </div>
            </div>
            <div className="create-listing-col">
              <div className="create-listing-title">Add some photos</div>
              <div className="create-listing-form">
                {[...Array(currentlyUploading)].map((e, index) => (
                  <UploadForm
                    docId={docId}
                    setURLs={setURLs}
                    urls={urls}
                    currentlyUploading={currentlyUploading}
                    setCurrentlyUploading={setCurrentlyUploading}
                    key={index}
                  />
                ))}
              </div>
              <UploadImageGrid
                urls={urls}
                setCoverImage={setCoverImage}
                coverImage={newDocument.coverImage}
              />
            </div>
          </div>
          <button className="btn-dark" onClick={() => handleEditClick()}>
            Update <ArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default EditListing;
