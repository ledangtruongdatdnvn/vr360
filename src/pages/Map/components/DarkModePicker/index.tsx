import { Box, Button, FormControl, FormLabel } from "@mui/material";
import { useState } from "react";
interface DarkModePickerInterface {
  onModeChange: any;
  isDarkMode: boolean;
}
const DarkModePicker = ({
  onModeChange,
  isDarkMode,
}: DarkModePickerInterface) => {
  return (
    <FormControl>
      <FormLabel
        sx={{
          "&.MuiFormLabel-root": {
            fontSize: "16px",
            fontFamily: "inherit",
            color: "var(--main-bg-color)",
          },
        }}
      >
        Chế Độ
      </FormLabel>
      <Box component="div" mt="4px">
        <Button
          style={{
            color: "var(--main-bg-color)",
            border: "1px solid var(--main-bg-color)",
            backgroundColor: !isDarkMode ? "red" : "transparent",
            fontFamily: "inherit",
          }}
          onClick={() => {
            onModeChange(!isDarkMode);
          }}
        >
          Sáng
        </Button>
        <Button
          style={{
            color: "var(--main-bg-color)",
            border: "1px solid var(--main-bg-color)",
            marginLeft: "4px",
            backgroundColor: isDarkMode ? "red" : "transparent",
            fontFamily: "inherit",
          }}
          onClick={() => {
            onModeChange(!isDarkMode);
          }}
        >
          Tối
        </Button>
      </Box>
    </FormControl>
  );
};
export default DarkModePicker;
