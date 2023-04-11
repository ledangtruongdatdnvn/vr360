import { Stack } from "@mui/material";
import DialogContainer from "../Dialog";
import DialogButton from "../DialogButton";
const DialogInformation = ({
  onConfirm,
  onCancel,
  title,
  content,
  cancelText = "Cancel",
  okText = "Ok",
}: any) => {
  return (
    <DialogContainer
      title={title}
      content={content}
      action={
        <Stack direction="row" spacing={2}>
          <DialogButton variant="contained" onClick={() => onCancel()}>
            {cancelText}
          </DialogButton>
          <DialogButton variant="contained" onClick={() => onConfirm()}>
            {okText}
          </DialogButton>
        </Stack>
      }
      onClose={() => onCancel()}
    />
  );
};
export default DialogInformation;
