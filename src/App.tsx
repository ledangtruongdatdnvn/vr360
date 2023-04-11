import { Box } from "@mui/material";
import RoutesContainer from "./RoutesContainer";
import "./index.scss";
import { createTheme, ThemeProvider } from "@mui/material";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Sarabun", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box component="div" sx={{ minHeight: "100vh" }}>
        <RoutesContainer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
