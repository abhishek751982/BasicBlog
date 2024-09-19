# BasicBlog - MERN Stack Blog Application

![basicblog](https://github.com/user-attachments/assets/9a5d1999-8e4c-4677-846d-ccf15a029976)

## Overview

BasicBlog is a full-stack blog application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application features user and admin dashboards, theme toggle functionality, search capabilities, and secure user authentication using Email and Google. Redux is utilized for efficient state management.

## Features

- **User Dashboard**: Allows users to view and manage their blog posts.
- **Admin Dashboard**: Provides admin users with tools to manage all blog posts and users.
- **Theme Toggle**: Users can switch between light and dark themes.
- **Search Functionality**: Users can search for blog posts.
- **Authentication**: Secure user authentication via Email and Google.
- **State Management**: Utilized Redux for efficient state management.

## Technologies Used

- **Frontend**:
  - React.js
  - Redux
  - Tailwind CSS

- **Backend**:
  - Node.js
  - Express.js
  - JWT

- **Database**:
  - MongoDB

- **Authentication**:
  - Email
  - Google OAuth

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/abhishek751982/BasicBlog.git
    cd BasicBlog
    ```

2. **Install server dependencies**:
    ```bash
    cd api
    npm install
    ```

3. **Install client dependencies**:
    ```bash
    cd client
    npm install
    ```

### Configuration

1. **Set up environment variables**:
   Create a `.env` file in the `BasicBlog` directory with the following content:

    ```env
    MONGO_URI=your_mongo_db_uri
    JWT_SECRET=your_jwt_secret
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    ```

2. **Run the application**:

    ```bash
    # Start the server
    cd api
    npm run dev

    # Start the client
    cd client
    npm run dev
    ```

3. **Access the application**:
   Open your browser and go to `http://localhost:3000`.

## Folder Structure

  ```bash
    BasicBlog/
    │
    ├── client/ # React frontend
    │ ├── public/
    │ ├── src/
    │ │ ├── components/ # React components
    │ │ ├── pages/ # React pages
    │ │ ├── redux/ # Redux store and slices
    │ │ ├── App.js
    │ │ ├── index.js
    │ │ └── ...
    │ └── ...
    │
    ├── api/ # Node.js backend
    │ ├── config/ # Configuration files
    │ ├── controllers/ # Route controllers
    │ ├── models/ # Mongoose models
    │ ├── routes/ # Express routes
    │ ├── middlewares/ # Express middlewares
    │ ├── utils/ # Utility functions
    │ ├── server.js # Entry point
    │ └── ...
    │
    └── README.md
  ```


## About Me

I am Abhishek Sharma a final year student at IIIT Gwalior pursuing Integrated Post Graduate (B.Tech+M.Tech) degree in Information Technology. Do checkout my LinkedIn and connect with me.

### Connect with me :

[![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:abhishek751982@gmail.com)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abhishek-sharma-31b04a213/)



