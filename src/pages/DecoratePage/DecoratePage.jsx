import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DecoratePage() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const navigate = useNavigate();

  // Handle changes to the title field
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // Handle image upload and generate a preview
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handlePublish = (event) => {
    event.preventDefault();
    if (title && image) {
      console.log("Form submitted with:", { title, image });
      alert("Your image and title have been submitted!");
      navigate("/upload/border");
    } else {
      alert("Please provide both a title and an image!");
    }
  };

  return (
    <main className="decorate-page">
      <form onSubmit={handlePublish} className="decorate-page__form">
        <div className="decorate-page__title">YOUR NAME</div>
        <div>
          <textarea
            id="title"
            name="title"
            placeholder="Please enter your name here"
            value={title}
            onChange={handleTitleChange}
            required
            className="decorate-page__textarea"
          />
        </div>

        <div className="decorate-page__subtitle">ADD YOUR IMAGE</div>
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="decorate-page__input"
          />
        </div>

        {imagePreview && (
          <div className="decorate-page__preview">
            <p>PREVIEW:</p>
            <img
              src={imagePreview}
              alt="Preview"
              className="decorate-page__image"
            />
          </div>
        )}

        <button type="submit" className="decorate-page__button">
          SUBMIT
        </button>
      </form>
    </main>
  );
}
