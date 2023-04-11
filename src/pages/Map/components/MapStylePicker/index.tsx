import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { constants } from "../../../../constants";
interface MapStylePickerInterface {
  onStyleChange: any;
}
const MapStylePicker = ({ onStyleChange }: MapStylePickerInterface) => {
  return (
    <FormControl>
      <FormLabel
        id="map-style-label"
        sx={{
          "&.MuiFormLabel-root": {
            fontSize: "16px",
            color: "var(--main-bg-color)",
          },
        }}
      >
        Loại Bản Đồ
      </FormLabel>
      <RadioGroup
        aria-labelledby="map-style-label"
        defaultValue="STREETS"
        name="radio-buttons-group"
        row
      >
        {constants.mapStyle.map((item: any, index: any) => {
          return (
            <FormControlLabel
              key={index}
              value={item?.value}
              control={
                <Radio
                  style={{ color: "var(--main-bg-color)" }}
                  onChange={onStyleChange}
                />
              }
              label={item?.label}
              sx={{
                color: "var(--main-bg-color)",
                fontFamily: "Sarabun !important",
              }}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};
export default MapStylePicker;
