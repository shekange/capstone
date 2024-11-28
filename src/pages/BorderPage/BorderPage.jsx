import React, { useState } from "react";
import axios from "axios";

const BorderPage = () => {
  const [image, setImage] = useState(null);
  const [borderType, setBorderType] = useState("horizontal");
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
    // formData.append("borderType", borderType);
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

      // Check if response contains the image URL
      if (response && response.data && response.data.imageUrl) {
        setImageUrl(response.data.imageUrl);
        setErrorMessage("");
      } else {
        setErrorMessage("Failed to process the image.");
      }
    } catch (error) {
      // Handle errors from the API request
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

  // Handle border type selection
  const handleBorderSelection = (type) => {
    setBorderType(type);
  };

  return (
    <div className="global">
      <div className="global__title">Upload an Image with Border</div>

      {/* File input for image upload */}
      <input type="file" onChange={handleImageChange} />

      {/* Border type selection with visual representation */}
      <div className="global__border-selection">
        <p className="global__title">Select Border Type:</p>

        {/* <div className="border-images">
          <img
            src="/src/assets/images/border-horizontal.png"
            alt="Horizontal Border"
            className={`border-image ${borderType === "horizontal" ? "selected" : ""}`}
            onClick={() => handleBorderSelection("horizontal")}
          />
          <img
            src="/src/assets/images/border-vertical.png"
            alt="Vertical Border"
            className={`border-image ${borderType === "vertical" ? "selected" : ""}`}
            onClick={() => handleBorderSelection("vertical")}
          />
        </div> */}
      </div>

      {/* Submit button */}
      <button className="global__button" onClick={handleNextStep}>Upload Image</button>

      {/* Error message display */}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {/* Display the uploaded image */}
      {imageUrl && (
        <div>
          <div className="global__title">Processed Image:</div>
          <img src={imageUrl} alt="Processed border" width="300" />
        </div>
      )}
    </div>
  );
};

export default BorderPage;
