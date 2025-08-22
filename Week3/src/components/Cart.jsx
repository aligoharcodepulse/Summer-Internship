import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  TextField,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import ThankYouModal from "../Model/ThankYouModal";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [open, setOpen] = useState(false);
  const [thankYouOpen, setThankYouOpen] = useState(false);
  const navigate = useNavigate();
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "",
  });

  const [errors, setErrors] = useState({});

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Full Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phone) tempErrors.phone = "Phone Number is required";
    if (!formData.address) tempErrors.address = "Address is required";
    if (!formData.payment) tempErrors.payment = "Payment Method is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
        clearCart();
      setOpen(false);
      setThankYouOpen(true);
      
    }
  };

  return (
    <Box sx={{ py: 8, mt: 4, px: { xs: 2, md: 6 }, minHeight: "100vh", backgroundColor: "#fff" }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: "bold", mb: 4 }}>
        Your Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography align="center" variant="h6" color="text.secondary">
          🛒 Your cart is empty
        </Typography>
      ) : (
        <>
          <List>
            {cart.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemAvatar>
                    <Avatar variant="square" src={item.image} sx={{ width: 60, height: 60, mr: 2 }} />
                  </ListItemAvatar>
                  <ListItemText primary={item.name} secondary={`$${item.price}`} />
                  <TextField
                    type="number"
                    size="small"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    inputProps={{ min: 1 }}
                    sx={{ width: 70, mr: 2 }}
                  />
                  <Typography sx={{ mr: 2 }}>${(item.price * item.quantity).toFixed(2)}</Typography>
                  <IconButton onClick={() => removeFromCart(item.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>

          <Box sx={{ mt: 4, textAlign: "right" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Total: ${totalAmount.toFixed(2)}
            </Typography>
            <Button
              variant="contained"
              size="large"
              disabled={cart.length === 0}
              onClick={() => setOpen(true)}
              sx={{
                backgroundColor: "#ff6f61",
                borderRadius: "25px",
                px: 4,
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#ff3b2e" },
              }}
            >
              Checkout
            </Button>
          </Box>
        </>
      )}

      {/* Checkout Modal */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Checkout</DialogTitle>
        <DialogContent dividers>
          <TextField
            label="Full Name"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Phone Number"
            fullWidth
            margin="normal"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <TextField
            label="Address"
            fullWidth
            margin="normal"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            error={!!errors.address}
            helperText={errors.address}
          />
          <TextField
            select
            label="Payment Method"
            fullWidth
            margin="normal"
            value={formData.payment}
            onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
            error={!!errors.payment}
            helperText={errors.payment}
          >
            <MenuItem value="card">Credit/Debit Card</MenuItem>
            <MenuItem value="cod">Cash on Delivery</MenuItem>
          </TextField>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
            Total: ${totalAmount.toFixed(2)}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#ff6f61", "&:hover": { backgroundColor: "#ff3b2e" } }}
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </DialogActions>
      </Dialog>
      <ThankYouModal
      open={thankYouOpen}
      onClose={() => {
        setThankYouOpen(false);
        navigate("/");
      }}
    />
    </Box>
  );
};

export default Cart;
