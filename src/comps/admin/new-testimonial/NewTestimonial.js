import "./new-testimonial.css";
import { useEffect, useState } from "react";
import { ArrowRight } from "phosphor-react";
import { addDocument } from "../../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";

const NewTestimonial = () => {
  const [newDocument, setNewDocument] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNewDocumentChange = (e) => {
    const key = e.target.name;
    let value = e.target.value;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    setNewDocument({ ...newDocument, [key]: value });
  };

  const handleAddDoc = async () => {
    const { id } = await addDocument("testimonials", {
      ...newDocument,
      createdAt: Date.now(),
    });
    console.log(`Success! Testimonial id is ${id}`);
    navigate(`/about-me`);
    window.scrollTo(0, 0);
  };

  return (
    <div id="create-listing">
      <div id="create-listing-holder">
        <div id="create-listing-body">
          <div className="create-listing-col" style={{ padding: 0 }}>
            <div className="create-listing-title">
              Create a new <b>Testimonial</b>
            </div>
            <div className="create-listing-form">
              <input
                type="text"
                placeholder="name"
                name="name"
                onChange={(e) => handleNewDocumentChange(e)}
              />
              <textarea
                type="text"
                placeholder="review"
                name="review"
                onChange={(e) => handleNewDocumentChange(e)}
              />
            </div>
          </div>
        </div>
        <button className="btn-dark" onClick={() => handleAddDoc()}>
          Post <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default NewTestimonial;
