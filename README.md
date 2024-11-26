# Project Title

Wedding Photo Booth Website

## Overview

A user-friendly wedding photo booth website that allows guests to upload the photos they take at the wedding, apply pre-designed wedding-themed floral borders, and download the customized images. All uploaded images will be stored in a database for easy access and sharing.

### Problem Space

At weddings, guests often capture candid and memorable moments on their own devices. However, there isn’t always a centralized way to collect these photos and add a special touch to commemorate the event. This website provides a cost-effective and creative solution, letting guests enhance their pictures with wedding-themed borders and create lasting memories.

### User Profile

##### Who will use your website?

- Wedding guests who want to enhance and share their photos from the event.
- Event organizers or couples who want to collect and store all guest-uploaded photos in one place.

##### Special Considerations:

- The website needs to be intuitive and easy to navigate for users of all ages and technical skill levels.
- It should handle multiple simultaneous uploads without performance issues.
- Images should be stored securely in a database for later access.

### Features

1. **Photo Upload:** Guests can upload their photos from their devices.
2. **Floral Borders:** Offer a selection of wedding-themed floral borders to apply to the uploaded photos.
3. **Photo Storage:** Store all uploaded and customized photos in a centralized database for future access.
4. **Responsive Design:** Ensure the website is accessible on mobile, tablet, and desktop devices.

## Implementation

### Tech Stack

- **Frontend:** HTML, CSS (SCSS), JavaScript (React for interactivity).
- **Backend:** Node.js with Express for handling uploads and processing images.
- **Database:** MySQL for storing uploaded photos and metadata.
- **Image Processing:** Sharp or a similar library for applying floral borders to photos.

### APIs

- **Image Upload API:** For guests to upload their photos.
- **Image Processing API:** To apply wedding-themed floral borders to photos.

### Sitemap

1. **Home Page:** Welcome message, event details, and a call-to-action to upload photos.
2. **Photo Upload Page:** Simple drag-and-drop or file selector for uploading photos.
3. **Edit Page:** Display the uploaded photo with options to preview and apply floral borders.
4. **Confirmation Page:** Allow users to download their customized photos or return back to the main page.

### Mockups

![Capstone proposal1](https://github.com/user-attachments/assets/b302f450-0883-4db7-ab52-7f9ad9663a7a)
![Capstone proposal 2](https://github.com/user-attachments/assets/4787e332-2377-46b8-b31d-fa3f2bb92e11)

### Data

##### Relationships:

- **Photo Data:** Original photo, processed photo with the border, and metadata (e.g., upload time, user name).
- **Border Data:** Pre-defined options for floral borders.

##### Data Model Example:

- **Photo Table:**
  - `id`: Unique identifier for the photo.
  - `originalPhotoPath`: Path to the uploaded photo.
  - `processedPhotoPath`: Path to the photo with the floral border.
  - `timestamp`: Date and time of the upload.

### Endpoints

- **POST /upload:** Upload a photo to the server.
- **POST /process:** Apply a floral border to the uploaded photo.
- **GET /download/:id:** Retrieve the processed photo for download.
- **GET /photos:** (Optional for admin) Retrieve all uploaded photos.

## Roadmap

##### Day 1:
- Set up the project structure and basic website layout.
- Implement the photo upload feature.

##### Day 2:
- Add image processing functionality to apply floral borders.
- Set up the database for storing uploaded photos and metadata.

##### Day 3:
- Design and refine the UI for a seamless user experience.

##### Day 4:
- Implement responsive design for mobile and desktop devices.

##### Day 5:
- Test for bugs and optimize website performance.

##### Day 6:
- Deploy the website to a hosting platform.

---

## Future Implementations

- **AI Enhancements:** Automatically adjust photo brightness, contrast, or colors.
- **Guest Login:** Enable guests to create accounts and access all their uploaded photos.
- **Bulk Download:** Provide an option for the couple to download all uploaded photos at once.
- **Photo Sharing:** Add social media sharing options for customized photos.
