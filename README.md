# Social Network API

The Social Network API is a backend application that serves as the foundation for a social networking platform. It provides endpoints for managing users, thoughts, friendships, and reactions.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features

The Social Network API offers the following key features:

- User management: Create, read, update, and delete user profiles.
- Friendships: Add and remove friends from a user's friend list.
- Thoughts: Create, read, update, and delete thoughts, associated with user profiles.
- Reactions: Add and remove reactions to thoughts.
- Validation: Input validation to ensure data integrity.
- Virtuals: Use virtuals to compute additional data (e.g., friend count, reaction count).

## Installation

To set up and run the Social Network API on your local machine, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/social-network-api.git
   ```
2. Navigate to the project directory
    ```bash
    cd social-network-api
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up MongoDB

5. Start the node server
    ```bash
    npm start
    ```
The API server should now be running on the specified port (default: 3001).

## Usage
You can use tools like Insomnia or Postman to interact with the API. Here are some example API endpoints you can use:

Create a new user: POST /api/users
Retrieve all users: GET /api/users
Add a friend to a user: POST /api/users/:userId/friends/:friendId
Create a new thought: POST /api/thoughts
Retrieve all thoughts: GET /api/thoughts
Refer to the API Endpoints section below for a complete list of available endpoints and their usage.

## API Endpoints

The Social Network API provides the following endpoints:

**Users:**

- `GET /api/users`: Get all users.
- `GET /api/users/:userId`: Get a user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:userId`: Update a user by ID.
- `DELETE /api/users/:userId`: Delete a user by ID.

**Friends:**

- `POST /api/users/:userId/friends/:friendId`: Add a friend to a user.
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.

**Thoughts:**

- `GET /api/thoughts`: Get all thoughts.
- `GET /api/thoughts/:thoughtId`: Get a thought by ID.
- `POST /api/thoughts`: Create a new thought.
- `PUT /api/thoughts/:thoughtId`: Update a thought by ID.
- `DELETE /api/thoughts/:thoughtId`: Delete a thought by ID.

**Reactions:**

- `POST /api/thoughts/:thoughtId/reactions`: Create a reaction for a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow the standard GitHub fork and pull request workflow.
