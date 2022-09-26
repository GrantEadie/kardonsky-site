import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { deleteDocument, getStuff } from "../../hooks/useFirestore";
import { Star, Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import "./testimonials.css";

const Testimonials = () => {
  let navigate = useNavigate();
  const { user } = useOutletContext();
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const gotDocs = await getStuff("testimonials");
      setDocs(gotDocs.sort((a, b) => b.createdAt - a.createdAt));
    };
    fetchData();
  }, [setDocs]);

  const handleDeleteClick = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this testimonial post? This can't be undone."
      )
    ) {
      deleteDocument("testimonials", id);
      const gotDocs = await getStuff("testimonials");
      setDocs(gotDocs.sort((a, b) => b.createdAt - a.createdAt));
    }
  };

  return (
    <div className="testimonials">
      <h1>Previous happy clients</h1>
      {user && (
        <button onClick={() => navigate("/new-testimonial")}>
          Add Testimonial
        </button>
      )}
      {docs.map((card, index) => (
        <div className="testimonial-card" key={index}>
          <h2>
            {card.name}
            <span className="five-stars">
              {[...Array(5)].map((star, index) => (
                <Star key={index} weight="fill" />
              ))}
            </span>
          </h2>
          <p>{card.review}</p>
          {user && (
            <div
              className="delete-testimonial"
              onClick={() => handleDeleteClick(card.id)}
            >
              <Trash />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
