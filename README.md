# Project Title

Wedding Photo Booth Website

## Overview

A user-friendly wedding photo booth website that allows guests to upload the photos they take at the wedding, apply pre-designed wedding-themed floral border, and download the customized images. All uploaded images will be stored in a database for easy access and sharing.

### Problem Space

At weddings, guests often capture candid and memorable moments on their own devices. However, there isn’t always a centralized way to collect these photos and add a special touch to commemorate the event. This website provides a cost-effective and creative solution, letting guests enhance their pictures with wedding-themed borders and create lasting memories.

### User Profile

##### Who will use your website?

- Wedding guests who want to enhance and share their photos from the event.
- Event organizers or couples who want to collect and store all guest-uploaded photos in one place.

##### Special Considerations:

- The website needs to be intuitive and easy to navigate for users of all ages and technical skill levels.
- It should handle uploads without performance issues.
- Images should be stored securely in a database for later access.

### Features

1. **Photo Upload:** Guests can upload their photos from their devices.
2. **Floral Borders:** Offer a wedding-themed floral border to apply to the uploaded photos.
3. **Photo Storage:** Store all uploaded and customized photos in a centralized database for future access.
4. **Responsive Design:** Ensure the website is accessible on mobile, tablet, and desktop devices.

## Implementation

### Tech Stack

- **Frontend:** HTML, CSS (SCSS), JavaScript (React for interactivity).
- **Backend:** Node.js with Express for handling uploads and processing images.
- **Database:** Storing uploaded photos and metadata.
- **Image Processing:** Sharp or a similar library for applying floral borders to photos.

### APIs

- **Image Upload API:** For guests to upload their photos.
- **Image Processing API:** To apply wedding-themed floral borders to photos.

### Sitemap

1. **Home Page:** Welcome message, event details, and a call-to-action to upload photos.
2. **Upload Page:** Upload button for users to upload the image. Once they hit the button, the processed image will be returned at the bottom. Additionally, there will be a back to main page button to guide the users back to the homepage.

### Data

##### Relationships:

- **Photo Data:** Original photo and processed photo with the border.
- **Border Data:** Pre-defined options for floral borders.

##### Data Model Example:

- **Photo Table:**
  - `id`: Unique identifier for the photo.
  - `originalPhotoPath`: Path to the uploaded photo.
  - `processedPhotoPath`: Path to the photo with the floral border.

### Endpoints

- **POST /process:** Apply a floral border to the uploaded photo.

---

## Future Implementations

- **AI Enhancements:** Automatically adjust photo brightness, contrast, or colors.
- **Guest Login:** Enable guests to create accounts and access all their uploaded photos.
- **Bulk Download:** Provide an option for the couple to download all uploaded photos at once.
- **Photo Sharing:** Add social media sharing options for customized photos.
