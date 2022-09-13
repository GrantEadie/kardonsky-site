import "./blog-detail.css";
import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import { deleteDocument } from "../../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";
import { getStuff } from "../../../hooks/useFirestore";
import { useEffect, useState } from "react";
import AsyncImage from "../../tools/AsyncImage";
import SwiperGallery from "../../listings/listing/SwiperGallery";

const BlogDetail = () => {
  const { blogId } = useParams();
  let navigate = useNavigate();
  const { user } = useOutletContext();
  const [post, setPost] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const gotDocs = await getStuff("blog");
      setPost(gotDocs.find((data) => data.date === blogId));
    };
    fetchData();
  }, [setPost, blogId]);

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
          {showGallery && (
            <SwiperGallery
              setShowGallery={setShowGallery}
              urls={post.images}
              currentFocusedImage="0"
            />
          )}
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
                <AsyncImage
                  className="listing-photos"
                  src={url}
                  alt={index}
                  key={index}
                  onClick={() => setShowGallery(true)}
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
