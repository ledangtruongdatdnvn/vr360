import { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
const ScreenPicker = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  return (
    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
      <IconButton
        sx={{ color: "var(--main-bg-color)" }}
        onClick={() => setIsFullScreen(!isFullScreen)}
      >
        {isFullScreen ? (
          <FullscreenExitIcon style={{ color: "var(--main-bg-color)" }} />
        ) : (
          <FullscreenIcon style={{ color: "var(--main-bg-color)" }} />
        )}
      </IconButton>
    </Grid>
  );
};
export default ScreenPicker;
