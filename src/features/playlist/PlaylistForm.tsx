import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  deletePlaylist,
  addPlaylist,
  getPlaylists,
  Playlist,
  Video,
} from "./playlistSlice";
import styles from "./PlaylistForm.module.css";

const PlaylistForm = () => {
  const playlists: Playlist[] = useAppSelector(getPlaylists);
  const dispatch = useAppDispatch();

  console.log("playlists:", playlists);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Add Playlist"
          onClick={() => dispatch(addPlaylist("some title"))}
        >
          Add Playlist
        </button>
        <button
          className={styles.button}
          aria-label="Delete Oldest Playlist"
          onClick={() => dispatch(deletePlaylist({ index: 0 }))}
        >
          Delete Oldest Playlist
        </button>
      </div>
      <div className={styles.row}>
        <h4>Playlists JSON</h4>
        {playlists.forEach((playlist) => {
          <p>{playlist.toString()}</p>;
        })}
      </div>
    </div>
  );
};

export default PlaylistForm;
