# BasicBlog - MERN Stack Blog Application

**BasicBlog** is a full stack blog platform developed using the MERN stack, featuring ReactJS, NodeJS, ExpressJS, JWT, Google OAuth, MongoDB, and Tailwind. The project includes user and admin interfaces, a form builder for post creation, as well as theme switching and search functionalities to enhance overall usability. It also incorporates both email and Google authentication, with role-based permissions to ensure secure access for different user roles.

🌐 **Live Demo**: [BasicBlog on Railway](https://basicblog-production.up.railway.app/)

![basicblog](https://github.com/user-attachments/assets/08bf1361-a7ee-4b77-a700-c05f00e101ff)


## Features

- **User Dashboard**: Allows users to view, like and comment the blog posts.
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

## 🔧 Installation & Setup

To set up the project locally:

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
    MONGO=your_mongo_db_uri
    JWT_SECRET=your_jwt_secret
    VITE_FIREBASE_API_KEY=YOUR_VITE_FIREBASE_API_KEY
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


## About Me

I am Abhishek Sharma a final year student at IIIT Gwalior pursuing Integrated Post Graduate (B.Tech+M.Tech) degree in Information Technology. Do checkout my LinkedIn and connect with me.

### Connect with me :

[![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:abhishek751982@gmail.com)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abhishek-sharma-31b04a213/)



