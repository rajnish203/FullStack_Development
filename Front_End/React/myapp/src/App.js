import React, { useState, useEffect } from 'react';
import Preloader from './Preloader'; // Adjust the import path

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Initial loading state

  useEffect(() => {
    // Simulate data fetching delay for demo purposes
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false when data is fetched
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        /* Render your main content here */
        <div>Your App Content</div>
      )}
    </div>
  );
};

export default App;
