// before login
import { Container } from "@mui/material";
import Haeder from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
export default function LandinPage() {
  return (
    <>
      <Header />
      <Container sx={{ my: 3, minHieght: "100vh" }}>
        <Typography variant="h1">Welocme</Typography>
      </Container>
      <Footer />
    </>
  );
}
