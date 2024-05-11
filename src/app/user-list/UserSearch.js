import React, { useState } from "react";
import axios from "axios";

const UserSearch = ({ onSearch, onResetSearch }) => {
  const [searchId, setSearchId] = useState("");
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!searchId) {
      setError("Please enter a user ID");
      return;
    }

    try {
      const response = await axios.get(
        `https://reqres.in/api/users/${searchId}`
      );
      onSearch(response.data.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching user:", error);
      setError("User not found");
    }
  };

  const handleReset = () => {
    setSearchId("");
    setError(null);
    onResetSearch();
  };

  return (
    <div className="user-search-container">
      <input
        className="user-search-input"
        type="text"
        placeholder="Search user by ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />

      <div className="user-search-buttons">
        <button className="user-search-button" onClick={handleSearch}>
          Search
        </button>
        <button className="user-reset-button" onClick={handleReset}>
          Reset Search
        </button>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default UserSearch;
