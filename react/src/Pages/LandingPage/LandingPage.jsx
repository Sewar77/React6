// before login
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import { useProducts } from "../../Hooks/useProducts";

export default function LandinPage() {
  const { products } = useProducts();
  return (
    <>
      <Header />
      <Container sx={{ my: 3, minHeight: "100vh" }}>
        <Typography variant="h1">Welocme</Typography>
        <Grid container spacing={4}>
          {products.map((prod) => {
            return (
              <Grid key={prod.id} size={{ sm: 1, md: 4, lg: 6 }}>
                <Card>
                  <CardContent>
                    <Typography variant="h4">{prod.name}</Typography>
                    <Typography variant="h3">
                      {prod.price} || {prod.stock}
                    </Typography>
                    <Typography variant="body2">{prod.description}</Typography>
                  </CardContent>

                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button variant="contained">View</Button>
                    <Button variant="contained">Buy</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
