import AsyncImage from "../../tools/AsyncImage";
import "./upload.css";

const UploadImageGrid = ({ urls, setCoverImage, coverImage }) => {
  return (
    <div id="upload-img-grid">
      {urls.map((url, index) => (
        <AsyncImage
          className={coverImage === url ? "cover-selected" : null}
          key={index}
          src={url}
          alt={url}
          onClick={() => setCoverImage(url)}
        />
      ))}
    </div>
  );
};

export default UploadImageGrid;
