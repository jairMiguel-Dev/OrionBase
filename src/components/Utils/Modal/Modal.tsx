import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';

const style = {
  position: 'absolute' as '',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 550,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  outline: 'none',
  maxHeight: '90vh',
  overflowY: 'auto',
};

export interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  code?: string;
  example?: string;
}

export default function CustomModal({
  open,
  onClose,
  title,
  text1,
  text2,
  text3,
  text4,
  code,
  example
}: CustomModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      slotProps={{
        backdrop: {
          sx: { backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(4px)' }
        }
      }}
    >
      <Box sx={style}>
        {title && (
          <Typography id="modal-title" variant="h5" component="h2" sx={{ fontWeight: 700, color: 'primary.main' }}>
            {title}
          </Typography>
        )}

        {text1 && (
          <Typography variant="body1" color="text.secondary">
            {text1}
          </Typography>
        )}

        {text2 && (
          <Typography variant="body1" color="text.secondary">
            {text2}
          </Typography>
        )}

        {code && (
          <Box
            sx={{
              backgroundColor: 'grey.900',
              color: 'common.white',
              p: 2.5,
              borderRadius: 2,
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.875rem',
              overflowX: 'auto',
              border: '1px solid',
              borderColor: 'grey.800',
              my: 1
            }}
          >
            {code}
          </Box>
        )}

        {text3 && (
          <Typography variant="body2" sx={{ fontStyle: 'italic', opacity: 0.8 }}>
            {text3}
          </Typography>
        )}

        {text4 && (
          <Typography variant="body2" sx={{ fontStyle: 'italic', opacity: 0.8 }}>
            {text4}
          </Typography>
        )}

        {example && (
          <Typography variant="body2" sx={{ fontStyle: 'italic', opacity: 0.8 }}>
            {example}
          </Typography>
        )}
      </Box>
    </Modal>
  );
}
