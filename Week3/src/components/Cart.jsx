import React from "react"
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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box sx={{ py: 8,mt:4, px: { xs: 2, md: 6 }, minHeight: "100vh", backgroundColor: "#fff" }}>
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
              sx={{ backgroundColor: "#ff6f61", borderRadius: "25px", px: 4, fontWeight: "bold", "&:hover": { backgroundColor: "#ff3b2e" } }}
            >
              Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;
