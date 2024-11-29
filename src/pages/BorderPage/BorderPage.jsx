import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BorderPage.scss";

const BorderPage = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleNextStep = async () => {
    if (!image) {
      setErrorMessage("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:8080/process-border",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response && response.data && response.data.imageUrl) {
        setImageUrl(response.data.imageUrl);
        setErrorMessage("");
      } else {
        setErrorMessage("Failed to process the image.");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(
          "Error processing the image: " + error.response.data.error
        );
      } else {
        setErrorMessage("Error: " + error.message);
      }
      console.error(error);
    }
  };

  return (
    <div className="global">
      <div className="global__title">Upload an Image</div>

      {/* File input for image upload */}
      <input type="file" onChange={handleImageChange} />

      {/* Submit button */}
      <button className="global__button" onClick={handleNextStep}>
        Upload Image
      </button>

      {/* Error message display */}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {/* Display the uploaded image */}
      {imageUrl && (
        <div className="processed-image-section">
          <div className="global__title">Processed Image:</div>
          <img
            src={`http://localhost:8080${imageUrl}`}
            alt="Processed border"
            width="300"
          />
          {/* Add a link button */}
          <div>
            <Link to="/" className="global__button">
              Back to Main Page
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BorderPage;
