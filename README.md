# Files Upload using Multer

## 📌 Introduction

This repository is a simple learning project where I explored how to handle **file uploads (especially images)** in a Node.js application using **Multer**.
The main purpose of this project was to understand different ways of uploading and storing images, including:

* Saving images in a local folder.
* Converting images into **Base64** format and storing them in the database.

Through this project, I gained hands-on experience with how file upload systems work in backend development.

---

## 🛠️ Tools & Packages Used

* **Node.js** – Server-side JavaScript runtime.
* **Express.js** – Web framework for creating REST APIs.
* **MongoDB** – Database for storing user and image information.
* **Mongoose** – ODM for MongoDB to manage schemas and models.
* **Multer** – Middleware for handling file uploads in Node.js.
---

## 🚀 Features

* User registration with email.
* Upload image and:

  * Store it in the **uploads folder**.
  * Convert it to **Base64** and save in the database.
* Prevent duplicate emails during registration.

---

## 📂 Project Structure

```
├── models/
│   └── user.model.js   # Mongoose user schema
├── routes/
│   └── user.routes.js  # User routes
├── controllers/
│   └── user.controller.js # Controller logic
├── uploads/            # Folder where uploaded files are stored (when using diskStorage)
├── server.js           # Entry point
```

---

## 📝 What I Learned

While building this project, I learned:

* How to set up **Multer** with different storage options (diskStorage vs memoryStorage).
* How to upload and store images in a local folder.
* How to convert images to **Base64** format and store them in a database.
* How to integrate file uploads with user registration.
* How backend handles file data vs normal request data.

---

## ✅ Conclusion

This project was a great starting point to understand **file upload handling in Node.js**.
I learned how to work with Multer in two different ways (folder storage and Base64 storage) and connected it with MongoDB. This knowledge will help me in future projects like building **profile picture uploads, blog apps, or any system where media upload is required**.
