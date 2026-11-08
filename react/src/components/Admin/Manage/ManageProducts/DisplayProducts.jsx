import { useState } from "react";
import { useProducts } from "../../../../Hooks/useProducts";
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import AddFormProduct from "../../AdminComponents/AddFormProduct";
import EditModal from "../../AdminComponents/EditModal";
export default function DisplayProducts() {
  const { products, deleteProduct, product, getProductById } = useProducts();
  const [openModal, setOpenModal] = useState(false);
  const [openAddForm, setOpenAddForm] = useState(false);

  //state ,
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selctedProduct, setSelctedProduct] = useState(null);
  return (
    <>
      <Box>
        <Typography variant="h3">Manage products</Typography>
        <Divider sx={{ p: 2 }}>where to manage</Divider>
        <Button
          variant="contained"
          sx={{ m: 3 }}
          onClick={() => setOpenAddForm(!openAddForm)}
        >
          {openAddForm ? "Cancel" : "Add product"}
        </Button>

        <Box>
          {openAddForm && <AddFormProduct setOpenAddForm={setOpenAddForm} />}
        </Box>

        <TableContainer sx={{ width: "100%", overflowX: "scroll" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Descirpion</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>ACTIONS</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {products.map((product, idx) => {
                return (
                  <TableRow key={product.id}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Button
                        color="info"
                        onClick={() => (
                          getProductById(product.id),
                          setOpenModal(true)
                        )}
                      >
                        View
                      </Button>
                      <Button
                        color="error"
                        onClick={() => deleteProduct(product.id)}
                      >
                        Delete
                      </Button>

                      <Button
                        color="error"
                        onClick={() => (
                          setOpenEditModal(true),
                          setSelctedProduct(product)
                        )}
                      >
                        Update
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
          }}
        >
          <Typography variant="h3">{product.name}</Typography>
          <Typography variant="body2">{product.description}</Typography>
          <Typography variant="body2">{product.price}</Typography>
          <Typography variant="body2">{product.stock}</Typography>
          <Button onClick={() => setOpenModal(false)}>close</Button>
          <Button
            onClick={() => (deleteProduct(product.id), setOpenModal(false))}
          >
            Delete
          </Button>
        </Box>
      </Modal>
      {openEditModal && (
        <EditModal
          openEditModal={openEditModal}
          setOpenEditModal={setOpenEditModal}
          selctedProduct={selctedProduct}
        />
      )}
    </>
  );
}
