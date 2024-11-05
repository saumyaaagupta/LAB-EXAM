// frontend/src/App.js

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    axios
      .get("http://localhost:5000/api/data") // Backend URL
      .then(response => setData(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <h1>Data from Backend</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li> // Display 'name' field of each item
        ))}
      </ul>
    </div>
  );
}

export default App;
