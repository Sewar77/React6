import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useProducts } from "../../../Hooks/useProducts";

export default function AddFormProduct({ setOpenAddForm }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    stock: 0,
    price: 1,
  });
  const { addProduct } = useProducts();
  const handleAddProduct = () => {
    addProduct(newProduct);
    setOpenAddForm(false);
  };

  return (
    <>
      <Container sx={{ my: "auto" }}>
        <Paper
          elevation={4}
          sx={{ p: 3, display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Typography variant="h3">Add Product</Typography>
          <TextField
            label="Name"
            required
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
          <TextField
            label="Description"
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
          <TextField
            label="Price"
            type="number"
            required
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <TextField
            label="Stock"
            type="number"
            required
            onChange={(e) =>
              setNewProduct({ ...newProduct, stock: e.target.value })
            }
          />
          <Button variant="contained" onClick={() => handleAddProduct()}>
            Add
          </Button>
        </Paper>
      </Container>
    </>
  );
}
