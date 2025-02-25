import { CloseIcon } from "@/assests";
import { Dialog, DialogContent, DialogTitle, IconButton, useMediaQuery, Stack, DialogActions } from "@mui/material";

const BootstrapDialogTitle = ({ children, onClose, ...other }) => {
  const isLargeScreen = useMediaQuery("(min-width:600px)");
  return (
    <DialogTitle sx={{ textAlign: "center" }} {...other}>
      {children}
      {isLargeScreen && onClose && (
        <IconButton onClick={onClose} sx={{ position: "absolute", right: 15, top: 20 }}>
          <CloseIcon />
        </IconButton>
      )}
    </DialogTitle>
  );
};

const ModalWrapper = ({
  open,
  onClose,
  title,
  children,
  dialogContentSx,
  submitBtnTitle = "Save",
  imageTitle = "Upload Your Image",
  imageSubTitle,
  size = "sm",
  showImageUploader = true,
  dialogActions,
  ...props
}) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");


  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={size}
      fullWidth={!isSmallScreen}
      PaperProps={{ style: { borderRadius: 10, padding: 5 } }}
      sx={{ "& .MuiDialog-container": { "& .MuiPaper-root": { minWidth: "280px" } } }}
      scroll="paper"
      {...props}
    >
      <BootstrapDialogTitle onClose={onClose}>{title}</BootstrapDialogTitle>
      <DialogContent sx={{ ...dialogContentSx, px: 1 }}>
        <Stack>{children}</Stack>
      </DialogContent>
      {dialogActions && <DialogActions>{dialogActions}</DialogActions>}
    </Dialog>
  );
};

export default ModalWrapper;
