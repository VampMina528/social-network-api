# 📱 NoSQL Social Network API

This is a RESTful API for a social network application built using **Express.js**, **MongoDB**, and **Mongoose**. It enables users to create accounts, post thoughts, react to friends' thoughts, and manage a friends list — all through a NoSQL database.

This API demonstrates full CRUD operations for users and thoughts, supports nested subdocuments for reactions, and includes virtual properties for total friends and reaction counts. It is tested using **Insomnia** and is designed to handle large amounts of unstructured data.

---

## 🚀 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)

---

## 🧰 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/VampMina528/social-network-api.git
   cd social-network-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Make sure MongoDB is running locally on your system (port 27017).

4. Start the server:
   ```bash
   npm run dev
   ```

---

## 🛠️ Usage

This API is not deployed and is meant to be tested with a tool like **Insomnia**.

Example: Create a new user  
```
POST http://localhost:3001/api/users
Body:
{
  "username": "rockstar2025",
  "email": "rockstar2025@email.com"
}
```

---

## 📡 API Routes

### Users

| Method | Route                            | Description                         |
|--------|----------------------------------|-------------------------------------|
| GET    | /api/users                       | Get all users                       |
| GET    | /api/users/:userId               | Get a single user                   |
| POST   | /api/users                       | Create a new user                   |
| PUT    | /api/users/:userId               | Update a user                       |
| DELETE | /api/users/:userId               | Delete a user and their thoughts    |
| POST   | /api/users/:userId/friends/:friendId | Add a friend                  |
| DELETE | /api/users/:userId/friends/:friendId | Remove a friend               |

### Thoughts

| Method | Route                            | Description                         |
|--------|----------------------------------|-------------------------------------|
| GET    | /api/thoughts                    | Get all thoughts                    |
| GET    | /api/thoughts/:thoughtId         | Get a single thought                |
| POST   | /api/thoughts                    | Create a new thought                |
| PUT    | /api/thoughts/:thoughtId         | Update a thought                    |
| DELETE | /api/thoughts/:thoughtId         | Delete a thought                    |
| POST   | /api/thoughts/:thoughtId/reactions | Add a reaction                    |
| DELETE | /api/thoughts/:thoughtId/reactions/:reactionId | Remove a reaction     |

---

## 💻 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- Insomnia (for API testing)

---

## 🎥 Walkthrough Video

📹 [Click here to watch the full API demonstration](#)  
_This video shows all GET, POST, PUT, DELETE routes, friend interactions, and reaction logic in action via Insomnia._

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Credits

Developed by T. Mina Draper-Hammond  
Full Stack Software Developer  
University of Kansas Bootcamp

