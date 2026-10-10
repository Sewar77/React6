import Product from "./Product";

export default function Greeting({ name = "User" }) {
  // greeting component recieves name as props

  return (
    <>
      {/* child  */}
      <h1>Hello, {name}</h1>
      <Product
        cardBody={"products - t-shirt pink. "}
        cardFooter={"price 33$"}
        cardImage={"../public/favicon.svg"}
        cardTitle={"Clothes"}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint deserunt
        magnam voluptates assumenda, quis dicta porro. Maxime et officia quas
        odit voluptas, distinctio voluptates, doloribus delectus fuga, ducimus
        optio pariatur.
      </p>
    </>
  );
}
