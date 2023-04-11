import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const DialogButton = styled(Button)({
  transition: "all 0.3s ease !important",
  background: "var(--main-bg-color) !important",
  height: "36px",
  borderRadius: "9999px !important",
  color: "var(--main-content-text-color)!important",
  width: 100,
  fontWeight: "bold",
  padding: "6px 16px",
  fontFamily: "inherit !important",
  fontSize: "16px",
  "&:hover": {
    filter: "brightness(1.2)",
    boxShadow: "0px 2px 2px #000 !important",
    transform: "translateY(1px)",
  },
  "&.Mui-disabled": {
    color: "rgba(0, 0, 0, 0.26) !important",
  },
});
export default DialogButton;
