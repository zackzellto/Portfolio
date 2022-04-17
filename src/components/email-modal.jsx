import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import EmailLogo from '../media/email-logo.png'
import Modal from '@mui/material/Modal';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField, TextareaAutosize } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'text.secondary',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EmailModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
               <img
              className="email-link"
              src={EmailLogo}
              alt="email-logo"
                onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Me!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Want to drop me a direct line? Email me as I regularly check my email.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="subject"
            label="Subject"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextareaAutosize
  aria-label="minimum height"
  minRows={15}
  placeholder="Message"
  style={{ width: 550 }}
/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
        </Box>
      </Modal>
    </>
  );
}
