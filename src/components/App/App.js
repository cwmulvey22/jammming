import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import TrackList from '../TrackList/TrackList';
import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
  ]);

  const [playlist, setPlaylist] = useState([
    { id: 3, name: 'Song 3', artist: 'Artist 3', album: 'Album 3' },
  ]);

  const handleSearch = (searchTerm) => {
    console.log(`Searching for ${searchTerm}`);
    // Add logic to search and update search results
  };

  const addTrack = (track) => {
    setPlaylist([...playlist, track]);
  };

  const removeTrack = (track) => {
    setPlaylist(playlist.filter(currentTrack => currentTrack.id !== track.id));
  };

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="App-playlist">
        <TrackList tracks={searchResults} onAdd={addTrack} isRemoval={false} />
        <TrackList tracks={playlist} onRemove={removeTrack} isRemoval={true} />
      </div>
    </div>
  );
};

export default App;
