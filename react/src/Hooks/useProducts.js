import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export const useProducts = () => {
    const [products, setProducts] = useState(
        JSON.parse(localStorage.getItem("products")) || [],
    ); //init [place] store prducts => ls
    const [product, setProduct] = useState({});
    //get all
    const getAllProducts = () => {
        try {
            const products = JSON.parse(localStorage.getItem("products")) || [];
            setProducts(products);
        } catch (error) {
            toast.error(error);
            console.log(error);
            return;
        }
    };
    const deleteProduct = (id) => {
        try {
            const newProducts = products.filter((prod) => prod.id !== id);
            // when false => filter
            setProducts(newProducts);
            localStorage.setItem("products", JSON.stringify(newProducts));
            toast.success("deleted successfully");
        } catch (error) {
            toast.error(error);
            console.log(error);
            return;
        }
    };
    const getProductById = (id) => {
        try {
            const product = products.find((prod) => prod.id === id);
            setProduct(product);
        } catch (error) {
            toast.error(error);
            console.log(error);
            return;
        }
    };
    const addProduct = (prodData) => {
        try {
            if (!prodData.name || !prodData.price || !prodData.stock) {
                toast.error("please add product details");
                return;
            }
            if (prodData.price <= 0) {
                toast.error("price must be valid positive number");
                return;
            }
            if (prodData.stock < 0) {
                toast.error("stock must be valid positive number");
                return;
            }
            const newProduct = {
                //one product
                name: prodData.name,
                description: prodData.description || "---",
                price: prodData.price,
                stock: prodData.stock,
                id: Date.now(),
            };
            const updatedProducts = [...products, newProduct];
            setProducts(updatedProducts);
            localStorage.setItem("products", JSON.stringify(updatedProducts));
            getAllProducts();
            toast.success("product added successfully");
        } catch (error) {
            toast.error(error);
            console.log(error);
            return;
        }
    };
    const updatedProduct = (id, prodData) => {
        try {
            const updateProduct = {
                //existed one but updated product
                name: prodData.name, // old, new
                description: prodData.description,
                price: prodData.price,
                stock: prodData.stock,
            };
            const newProducts = products.map((prod) =>
                prod.id === id ? { ...updateProduct, id: prod.id } : prod,
            );

            // setProducts(newProducts);
            localStorage.setItem("products", JSON.stringify(newProducts));
            getAllProducts();
            toast.success("product updated successfully");
        } catch (error) {
            toast.error(error);
            console.log(error);
            return;
        }
    };
    // everymiute - 24/7 call the getAllProducts() function
    useEffect(() => {
        getAllProducts() // work with api
    }, [])
    return { products, deleteProduct, product, getProductById, addProduct, updatedProduct };
};
