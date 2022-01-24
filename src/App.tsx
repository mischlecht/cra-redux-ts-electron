import PlaylistForm from "./features/playlist/PlaylistForm";
import styles from "./App.module.css";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid className={styles.app_container} spacing={1}>
      <PlaylistForm />
    </Grid>
  );
}

export default App;
