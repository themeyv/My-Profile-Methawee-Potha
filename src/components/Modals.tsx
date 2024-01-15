import React, { useState } from 'react';
import { Modal, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
  position:'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
});

export default function Modals() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Don't click me!</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Crying
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img
              src="src/assets/cry.jpg"
              alt="Resume"
              style={{ width: '450px', height: '650px' }}
            />
          </Typography>
        </StyledBox>
      </Modal>
    </div>
  );
}
