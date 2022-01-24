import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  deletePlaylist,
  addPlaylist,
  getPlaylists,
  Playlist,
} from "./playlistSlice";
import styles from "./PlaylistForm.module.css";
import { Grid, TextField, Typography } from "@mui/material";

const PlaylistForm = () => {
  const playlists: Playlist[] = useAppSelector(getPlaylists);
  const dispatch = useAppDispatch();

  console.log("playlists:", playlists);

  return (
    <Grid container spacing={1}>
      <Grid item xs={9} className={styles.bordered}>
        <Typography variant="h5">New Playlist</Typography>
        <TextField id="outlined-basic" label="Title" variant="outlined" />
        <button
          aria-label="Add Playlist"
          onClick={() => dispatch(addPlaylist("some title"))}
        >
          Add Playlist
        </button>
        <button
          aria-label="Delete Oldest Playlist"
          onClick={() => dispatch(deletePlaylist({ index: 0 }))}
        >
          Delete Oldest Playlist
        </button>
      </Grid>
      <Grid container item xs={3} className={styles.bordered}>
        <h4>Playlists</h4>
        {playlists.map((playlist) => (
          <Grid item xs={12} key={`playlist_${playlist.id}`}>
            {playlist.title.toString()}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default PlaylistForm;
