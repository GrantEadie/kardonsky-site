import "./blog-detail.css";
import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import useGetDocs from "../../../hooks/useFirestore";
import { deleteDocument } from "../../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const { blogId } = useParams();
  let navigate = useNavigate();
  const { user } = useOutletContext();
  const { docs } = useGetDocs("blog");
  const post = docs.find((data) => data.id === blogId);

  const handleDeleteClick = (blogId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this blog post? This can't be undone."
      )
    ) {
      deleteDocument("blog", blogId);
      navigate(`/blog/`);
      window.scrollTo(0, 0);
    }
  };

  const handleClickEdit = () => {
    navigate(`/listings/edit/${blogId}`);
    window.scrollTo(0, 0);
  };

  return (
    <div id="blog-detail">
      {!post ? (
        <div className="loading">
          <div className="dot-fire"></div>
        </div>
      ) : (
        <div id="blog-detail-container">
          <div id="blog-detail-header-text">
            <div>
              <h1>{post.title}</h1>
              <h2>{post.date} / Valerie Kardonsky</h2>
            </div>
            <div>
              <h3>{post.body}</h3>
            </div>
          </div>
          <div id="listing-photos">
            <div id="listing-photos-container">
              {post.images.map((url, index) => (
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
                onClick={() => handleDeleteClick(blogId)}
              >
                Delete this blog post
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
