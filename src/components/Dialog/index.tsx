import CancelIcon from "@mui/icons-material/Cancel";
import { DialogActions, DialogContent } from "@mui/material";
import Box from "@mui/material/Box";
import { DialogWrapper, StyledDialog } from "./styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
interface CustomDialogProps {
  dialogIcon?: any;
  title?: string;
  content?: any;
  isShow?: boolean;
  onClose?: any;
  action?: any;
  maxWidth?: any;
  contentForModal?: any;
}
const DialogContainer = ({
  dialogIcon = <NotificationsIcon sx={{ color: "var(--main-content-text-color)" }} />,
  title = "Notification",
  content,
  isShow = true,
  onClose,
  action,
  maxWidth,
  contentForModal,
}: CustomDialogProps) => {
  const handleCloseDialog = () => {
    onClose();
  };
  return (
    <StyledDialog disablePortal open={isShow} maxWidth={maxWidth}>
      <DialogWrapper>
        <Box component="div" className="dialog-inside">
          <Box component="div" className="dialogTitleRoot">
            <Box component="div" display="flex" alignItems="center">
              {dialogIcon}
              <span style={{ marginLeft: 16 }}>{title}</span>
            </Box>
            <CancelIcon
              style={{ cursor: "pointer" }}
              onClick={handleCloseDialog}
              sx={{ color: "var(--main-content-text-color)" }}
            />
          </Box>
          {content && <DialogContent>{content}</DialogContent>}
          {action && (
            <DialogActions
              sx={{
                "&.MuiDialogActions-root": {
                  display: "flex",
                  justifyContent: { xs: "center", sm: "end" },
                },
              }}
            >
              {action}
            </DialogActions>
          )}
          {contentForModal}
        </Box>
      </DialogWrapper>
    </StyledDialog>
  );
};

export default DialogContainer;
