import Button from "./components/Button";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Product from "./components/Product";

function App() {
  // js
  // parent component
  return (
    <>
      {/* components */}
      <Header />
      <Greeting name={"Sewar"} />
      <Button />
      <Button text="Save" />
      {/* ? => means it might be null */}
      <Greeting />
      <div className="min-h-[100vh]">
        <Product
          cardBody={"products - t-shirt pink. "}
          cardFooter={"price 33$"}
          cardImage={"../public/favicon.svg"}
          cardTitle={"Clothes"}
        />
        <Product
          cardBody={"products - t-shirt pink. "}
          cardFooter={"price 33$"}
          cardImage={"../public/favicon.svg"}
          cardTitle={"Clothes"}
        />
        <Product
          cardBody={"products - t-shirt pink. "}
          cardFooter={"price 33$"}
          cardImage={"../public/favicon.svg"}
          cardTitle={"Clothes"}
        />
        <Product
          cardBody={"products - t-shirt pink. "}
          cardFooter={"price 33$"}
          cardImage={"../public/favicon.svg"}
          cardTitle={"Clothes"}
        />
      </div>
      <Footer />
      {/* html */}
    </>
  );
}

export default App;

// task:
// card contains:
// name
// description
// price
// image

// call it from app and pass props,
