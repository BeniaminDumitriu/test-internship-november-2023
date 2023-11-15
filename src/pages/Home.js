import React, { useState } from "react";
import "./pagesUI/Home.css";
import Modal from "../components/Modal";
import Dialog from "../components/Dialog";

function Home() {
  const [searchWord, setSearchWord] = useState("");
  const [results, setResults] = useState(null);
  const [apiData, setApiData] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSearch = async () => {
    if (searchWord.trim() === "") {
      alert("Please enter a search word.");
      return;
    }

    if (!/^[a-zA-Z]+$/.test(searchWord)) {
      alert("Please enter only letters.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      const data = await response.json();
      setApiData(data);
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <h1>HomePage🏠</h1>

      <div>
        <label htmlFor="searchInput">Search Word:</label>
        <input
          type="text"
          id="searchInput"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          maxLength={100}
          pattern="[A-Za-z]+"
          required
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {results && (
        <div>
          <h2>Definitions for "{searchWord}":</h2>
          <ul>
            {results.map((entry, index) => (
              <li key={index}>
                <strong>{entry.word}</strong>: {entry.meanings[0].definition}
              </li>
            ))}
          </ul>
        </div>
      )}
      <table className="tabel">
        <thead>
          <tr>
            <th>Word</th>
            <th>DateTime</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
      <div>
        <button onClick={openModal}>Open Modal</button>

        <Modal isOpen={modalOpen} closeModal={closeModal}>
          {apiData && (
            <div>
              <h2>API Data:</h2>
              <pre>{JSON.stringify(apiData, null, 2)}</pre>
            </div>
          )}
        </Modal>
      </div>
      <Dialog />
    </div>
  );
}

export default Home;
