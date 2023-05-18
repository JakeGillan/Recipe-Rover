---

# Project Name

Recipe-Rover

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Recipe-Rover is a web application that allows users to save and find recipes from blogs. It provides a user-friendly interface to add and manage recipes, as well as search for and save recipes from various blogs.

## Installation

To run Recipe-Rover locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up the database:
   - Install MongoDB and ensure it's running on your local machine.
   - Create a MongoDB database named "Recipe-Rover" for recipe data.
   - Create a MongoDB database named "Blogs" for blog data.
4. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Set `MONGO_URI` to your local MongoDB connection URI.
5. Start the server: `npm start`
6. Access the application in your browser at `http://localhost:3000`

## Usage

- Home: The landing page of the application with a brief introduction and navigation links.
- Find Recipe: Allows users to search for recipes from blogs and save them.
- Add Recipe: Enables users to add their own recipes with details like name, ingredients, and instructions.
- Your Recipes: Displays a list of recipes added by the user.
- Get Blog Recipes: Shows a list of recipes saved from blogs.

## API Routes

The following API routes are available:

- `GET /api/fetch`: Fetches the HTML content from a given URL.
- `GET /api/getRecipes`: Retrieves all the saved recipes.
- `GET /api/blogRecipes`: Retrieves all the saved blog recipes.
- `POST /api/recipes`: Adds a new recipe to the database.
- `POST /api/blogs`: Adds a new blog recipe to the database.

Refer to the code files for detailed implementations of these routes.

## Technologies Used

- React
- Node.js
- Express
- MongoDB
- React Router
- HTML
- CSS

## Contributing

Contributions to Recipe-Rover are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---
