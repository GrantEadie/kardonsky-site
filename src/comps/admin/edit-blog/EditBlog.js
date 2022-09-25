import "./new-blog.css";
import { useState } from "react";
import { ArrowRight } from "phosphor-react";
import { updateDocument } from "../../../hooks/useFirestore";
import UploadForm from "../upload/UploadMultiple";
import UploadImageGrid from "../upload/UploadImageGrid";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useGetDocs from "../../../hooks/useFirestore";

const inputs = ["title", "date"];

const EditBlog = () => {
  const { blogId } = useParams();
  const [newDocument, setNewDocument] = useState({});
  const { docs } = useGetDocs("blog");
  const [docId] = useState(blogId);
  const blog = docs.find((data) => data.id === blogId);
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
    updateDocument("blog", blogId, newDocument);
    navigate(`/blog/${blogId}`);
    window.scrollTo(0, 0);
  };

  console.log(blog);

  return (
    <div id="create-listing">
      {!blog ? (
        <div className="loading">
          <div className="dot-fire"></div>
        </div>
      ) : (
        <div id="create-listing-holder">
          <div id="create-listing-body">
            <div className="create-listing-col">
              <div className="create-listing-title">
                Create a new <b>Blog Post</b>
              </div>
              <div className="create-listing-form">
                {inputs.map((input, index) => (
                  <input
                    type="text"
                    placeholder={input}
                    name={input}
                    onChange={(e) => handleNewDocumentChange(e)}
                    key={index}
                    defaultValue={blog[input]}
                  />
                ))}
                <textarea
                  type="text"
                  placeholder={"body"}
                  name={"body"}
                  onChange={(e) => handleNewDocumentChange(e)}
                  defaultValue={blog.body}
                />
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
                urls={blog.images}
                setCoverImage={setCoverImage}
                coverImage={newDocument.coverImage}
              />
            </div>
          </div>
          <button className="btn-dark" onClick={() => handleAddDoc()}>
            Post <ArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default EditBlog;
