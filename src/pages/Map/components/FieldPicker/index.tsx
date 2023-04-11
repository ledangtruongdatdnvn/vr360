import {
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { constants } from "../../../../constants";
const FieldPicker = () => {
  const [field, setField] = useState("1");
  const handleSelectChange = (e: SelectChangeEvent) => {
    setField(e.target.value as string);
  };
  const fields = constants.fields;
  return (
    <FormControl fullWidth>
      <FormLabel
        sx={{
          "&.MuiFormLabel-root": {
            fontSize: "16px",
            fontFamily: "inherit",
            color: "var(--main-bg-color)",
          },
        }}
      >
        Chọn Lĩnh Vực
      </FormLabel>
      <Select
        variant="outlined"
        sx={{
          color: "var(--main-content-text-color)",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          ".MuiSvgIcon-root ": {
            fill: "var(--main-content-text-color) !important",
          },
          background: "var(--main-bg-color)",
          mt: "4px",
        }}
        labelId="field-picker-label"
        value={field}
        onChange={handleSelectChange}
        inputProps={{
          sx: {
            fontSize: "16px",
            fontFamily: "Sarabun, sans-serif",
            color: "var(--main-content-text-color)",
            background: "var(--main-bg-color)",
            padding: "8px",
          },
        }}
      >
        {fields.map((field, i) => {
          return (
            <MenuItem
              sx={{
                "&.MuiMenuItem-root": {
                  color: "var(--main-content-text-color) !important",
                  fontSize: "14px",
                  fontFamily: "inherit",
                },
              }}
              value={field.value}
              key={i}
            >
              {field.field}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
export default FieldPicker;
