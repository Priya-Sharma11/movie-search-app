# Movie Database App

A simple React application that retrieves movie information from a `data.json` file hosted on a local server and displays the movie details.

## Features

- Retrieves movie data from a local server. 
- Displays movie details such as title, release date, overview, poster image, author, director and ratings

## Technologies Used

- **React** – Frontend framework
- **Axios** – HTTP client for fetching data
- **CSS** – Styling the components
  
## Installation

### 1. Clone the repository

````
git clone https://github.com/username/movie-database-app.git
````

### 2. Navigate into the project directory
````
cd movie-database
````

### 3. Install dependencies for the client (React) 
````
npm install
````

#### 4.  Install json-server globally
````
npm install -g json-server
````

### 5. Start the json-server to serve the data
````
json-server --watch src/data.json --port 5000
````
This will start a mock API on http://localhost:5000 that will serve the movie data in data.json.

### 6. Run the React application
````
npm run // for react application
OR
npm run dev // if you are using vite
````
Your app will now be running at http://localhost:3000 for react and http://localhost:5173 for vite app and will retrieve movie details from the mock API at http://localhost:5000.
   
