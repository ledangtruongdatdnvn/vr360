import { IconButton, Box } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { MapContext } from "../..";
const Zoom = () => {
  const map = useContext(MapContext);
  const handleZoomOut = () => {
    (map as any).setZoom((map as any)?.getZoom() - 1);
  };
  const handleZoomIn = () => {
    (map as any).setZoom((map as any)?.getZoom() + 1);
  };
  return (
    <>
      <Box component="div">
        <IconButton
          sx={{ color: "var(--main-bg-color)" }}
          onClick={handleZoomIn}
        >
          <AddIcon sx={{ color: "var(--main-bg-color)" }} />
        </IconButton>
      </Box>
      <Box component="div">
        <IconButton
          sx={{ color: "var(--main-bg-color)" }}
          onClick={handleZoomOut}
        >
          <RemoveIcon sx={{ color: "var(--main-bg-color)" }} />
        </IconButton>
      </Box>
    </>
  );
};
export default Zoom;
