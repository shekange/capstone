import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PhotoPage.scss";

const PhotosPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/images")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  return (
    <div className="photos-page">
      <div className="photos-page__title">Processed Photos</div>
      <div className="photos-page__container">
        {images.length === 0 ? (
          <p>No images available</p>
        ) : (
          images.map((image, index) => (
            <div key={index} className="photos-page__item">
              <img
                src={`http://localhost:8080${image}`}
                alt={`Processed ${index}`}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PhotosPage;
