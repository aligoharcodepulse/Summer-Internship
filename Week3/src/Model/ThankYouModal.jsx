import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, Typography, Button } from "@mui/material";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ThankYouModal = ({ open, onClose }) => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    if (open) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <>
      {showConfetti && open && <Confetti width={width} height={height} />}
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: "20px",
            padding: "2rem",
            textAlign: "center",
          },
        }}
      >
        <DialogContent>
          <Typography variant="h4" gutterBottom>
            🎉 Thank You for Your Order!
          </Typography>
          <Typography variant="h6" gutterBottom>
            Your items will be processed shortly.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={onClose}
          >
            Back to Home
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ThankYouModal;
