// create your App component here
import React, { useState, useEffect } from "react";

const App = () => {
  // State to store the dog image URL
  const [dogImageUrl, setDogImageUrl] = useState(null);
  // State to track loading status
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the random dog image
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Set the image URL in state and mark loading as false
        setDogImageUrl(data.message);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching dog image:", error));
  }, []); // Empty dependency array to ensure effect runs only once

  return (
    <div>
      {/* Display loading message if loading */}
      {loading && <p>Loading...</p>}
      {/* Display dog image if available */}
      {dogImageUrl && (
        <img src={dogImageUrl} alt="A Random Dog" style={{ maxWidth: "100%" }} />
      )}
    </div>
  );
};

export default App;
