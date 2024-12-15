# HOME-ASSIGNMENT-LEADERS


This project is a platform that allows users to search for influencers, view their profiles, and explore their posts. It includes an API for fetching influencer data and displaying it in a user-friendly interface.

## Features

- **Search Bar**: Allows users to search influencers by username.
- **Influencer Profiles**: Displays detailed information about an influencer, including their posts, followers, and bio.
- **Post Feed**: Displays recent posts of the selected influencer with like and comment counts.
- **Proxy Image**: Handles image requests by proxying them through the server to avoid CORS issues.

## Technologies Used

- **Frontend**:
  - React
  - TypeScript
  - Axios
  - SCSS
  
- **Backend**:
  - NestJS
  - TypeScript
  - Axios for proxying images
  
## Installation

### Prerequisites

Before running the project, make sure you have the following installed:

- Node.js (preferably the latest LTS version)
- npm npm run start


### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/itayz1e/HOME-ASSIGNMENT-LEADERS



2. Set up environment variables  API keys in .env file. = 

- API_KEY=***

- API_URL=***

- REACT_APP_API_URL= ***


3. Install dependencies server:

cd server
npm install

Run the server :

   - npm run start:dev



4. Install dependencies client:

cd client
npm install

Run the client :

   - npm run dev

Run the backend server:

   - npm run start:dev



project-root/
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── server/
│   ├── src/
│   ├── package.json
│   ├── .env
│   └── ...
├── README.md
└── ...


The application will be available at http://localhost:3000.


## Author

This project was created by [Itay Amosi](https://github.com/itayz1e). Feel free to reach out if you have any questions or feedback.
