import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

const Playlist = ({ playlistName, tracks, onRemove, onNameChange, onSave }) => {
  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  };

  return (
    <div className="Playlist">
      <input
        value={playlistName}
        onChange={handleNameChange}
        placeholder="New Playlist"
      />
      <TrackList tracks={tracks} onRemove={onRemove} isRemoval={true} />
      <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
