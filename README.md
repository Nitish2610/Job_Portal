# Job Hunt Portal

A comprehensive Job Hunt Portal that serves as a platform for users and recruiters. Users can search for jobs based on location, apply for job postings, upload resumes, and manage their profiles. Recruiters can post jobs and manage applications efficiently. This project integrates multiple functionalities to bridge the gap between job seekers and recruiters.

---

## Features

### User Features:
- **User Authentication**: Login and signup functionality for users.
- **Search Jobs**: Search jobs based on location and keyword.
- **Apply for Jobs**: Users can apply to job postings with their uploaded resumes.
- **Manage Profile**: Edit user profiles to update information like name, contact details, and resume.
- **View Job Posts**: Browse all job postings and apply as needed.

### Recruiter Features:
- **Recruiter Authentication**: Login and signup functionality for recruiters.
- **Post Jobs**: Create and manage job postings.
- **Manage Applications**: View and manage job applications from users.

### Common Features:
- **Responsive Design**: Fully responsive UI to support desktop and mobile devices.
- **Dashboard**: Separate dashboards for users and recruiters to manage their activities.
- **Secure Data Handling**: Authentication and sensitive data are handled securely.

---

## Technologies Used

### Frontend:
- **React.js**: Dynamic and responsive user interfaces.
- **CSS/Tailwind CSS**: Styled components for attractive and responsive design.

### Backend:
- **Node.js**: Backend framework for API development.
- **Express.js**: Handling server-side routing and APIs.

### Database:
- **MongoDB**: NoSQL database for storing user, recruiter, and job data.

### Additional Tools:
- **Redux**: State management for seamless data flow across the application.
- **JWT**: Secure authentication with JSON Web Tokens.
- **Multer**: File uploads for resumes.
- **Axios**: HTTP client for API requests.
- **dotenv**: Secure environment variable management.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/job-hunt-portal.git
   cd job-hunt-portal
   ```

2. Install dependencies for the frontend:
   ```bash
   cd frontend
   npm install
   ```

3. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```

4. Set up the environment variables:
   - Create a `.env` file in the backend directory.
   - Add the following:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```

5. Start the development server:
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd frontend
     npm start
     ```

---


## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

## Acknowledgements

- Thanks to all contributors and developers who made this project possible.

---

## Contact

For any inquiries or support, please contact:
- **Name**: Nitish Sharma
- **Email**:nitishsharma09999@gmail.com
- **GitHub**: https://github.com/Nitish2610
