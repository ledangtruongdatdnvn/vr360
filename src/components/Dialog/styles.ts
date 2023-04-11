import { Box, Dialog } from "@mui/material";
import { styled } from "@mui/system";
export const StyledDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    width: "100%",
    borderRadius: "8px",
    background: "var(--main-bg-color)",
  },
  "& .MuiDialogActions-root": {
    padding: "20px 24px",
    "& button": {
      minWidth: "100px",
    },
  },
  "& .dialogTitleRoot": {
    position: "relative",
    padding: "16px 0",
    margin: "0px 20px",
    "& span": {
      color: "var(--main-content-text-color) !important",
    },
    borderBottom: "1px solid var(--main-content-text-color)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 16,
    fontWeight: 700,
  },
  "& .MuiDialogContent-root": {
    color: "var(--main-content-text-color)",
    fontSize: "15px",
    fontWeight: 500,
    minHeight: "80px",
    "& input[type=number]::-webkit-inner-spin-button": {
      appearance: "none",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      appearance: "none",
    },
  },
});

export const DialogWrapper = styled(Box)({
  fontFamily: "inherit",
  position: "relative",
  "& .dialog-inside": {
    height: "100%",
    width: "100%",
    position: "relative",
  },
});
