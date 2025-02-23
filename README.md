# **Voting Game**

This project was developed as a part of a **DataArt Winter Camp workshop**. It is a completed web application that allows users to vote on  jokes using emojis. 

## **🎯 Project Overview**

This project consists of two main parts:

1. A **React** frontend where users interact with jokes and vote.
2. A **Node.js** backend API, built using **Express.js**, that handles data storage and voting logic.

The application is deployed using **MongoDB Atlas** for cloud database storage.

## **🛠 Technologies Used**
- **Frontend:** React, Tailwind CSS, CSS
- **Backend:** Node.js, Express.js, MongoDB Atlas



## **🚀 How to Start the Project**

### **1. Clone the Repository**
```sh
git clone https://github.com/yourusername/voting-game.git
cd voting-game
```

### **2. Backend Setup**
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Create a `.env` file and add your MongoDB connection string:
   ```sh
   touch .env
   ```
   Inside `.env`, add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the backend server:
   ```sh
   npm start
   ```
5. (Optional) Fill the database with seed data:
   ```sh
   node seeder.js
   ```

### **3. Frontend Setup**
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm start
   ```



## **🚀 Future Plans**
I’m thinking about adding a leaderboard for each joke so people can see how each one is doing, and maybe even add daily, weekly, and all-time top jokes. I also plan to deploy the app and add **Socket.IO** for real-time vote tracking, so votes get updated live without refreshing.

This project was a great learning experience, and I look forward to expanding its functionality in the future. 🚀

