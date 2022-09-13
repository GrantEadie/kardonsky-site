import "./new-listing.css";
import { useState } from "react";
import { ArrowRight } from "phosphor-react";
import { addDocument } from "../../../hooks/useFirestore";
import UploadForm from "../upload/UploadMultiple";
import UploadImageGrid from "../upload/UploadImageGrid";
import { useNavigate } from "react-router-dom";

const inputs = [
  "address",
  "city",
  "bedrooms",
  "bathrooms",
  "sqft",
  "price",
  "acres",
];

const NewListing = () => {
  const [newDocument, setNewDocument] = useState({});
  const [docId, setDocId] = useState("");
  const [urls, setURLs] = useState([]);
  const [currentlyUploading, setCurrentlyUploading] = useState(1);
  let navigate = useNavigate();

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

  const handleAddDoc = async () => {
    const id = await addDocument("listings", {
      ...newDocument,
      images: urls,
      createdAt: Date.now(),
    });
    setDocId(id);
    navigate(`/listings/`);
    window.scrollTo(0, 0);
  };

  return (
    <div id="create-listing">
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
                />
              ))}
              <textarea
                type="text"
                placeholder={"description"}
                name={"description"}
                onChange={(e) => handleNewDocumentChange(e)}
              />
              <div className="checkbox-circle2">
                <input
                  type="checkbox"
                  id="checkbox-circle2"
                  name="sold"
                  onChange={(e) => handleNewDocumentChange(e)}
                />
                <label htmlFor="checkbox-circle2">Sold?</label>
              </div>
            </div>
          </div>
          <div className="create-listing-col">
            <div className="create-listing-title">Add some photos</div>
            <div className="create-listing-form">
              {[...Array(currentlyUploading)].map((e) => (
                <UploadForm
                  docId={docId}
                  setURLs={setURLs}
                  urls={urls}
                  currentlyUploading={currentlyUploading}
                  setCurrentlyUploading={setCurrentlyUploading}
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
        <button className="btn-dark" onClick={() => handleAddDoc()}>
          Post <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default NewListing;
