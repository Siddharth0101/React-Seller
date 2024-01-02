// src/components/ProductList.js
import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [newProduct, setNewProduct] = useState({
    productId: "",
    productName: "",
    sellingPrice: "",
  });

  useEffect(() => {
    // Load data from localStorage on component mount
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
    updateTotalAmount(storedProducts);
  }, []);

  const updateTotalAmount = (products) => {
    const total = products.reduce(
      (sum, product) => sum + parseFloat(product.sellingPrice),
      0
    );
    setTotalAmount(total.toFixed(2));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    const { productId, productName, sellingPrice } = newProduct;

    if (!productId || !productName || !sellingPrice) {
      alert("Please fill in all fields");
      return;
    }

    const updatedProducts = [
      ...products,
      { productId, productName, sellingPrice },
    ];

    // Update state and localStorage
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    updateTotalAmount(updatedProducts);

    // Clear the form after adding the product
    setNewProduct({ productId: "", productName: "", sellingPrice: "" });
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);

    // Update state and localStorage
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    updateTotalAmount(updatedProducts);
  };

  return (
    <div>
      <h1>Product List</h1>
      <form onSubmit={handleAddProduct}>
        <label>
          Product ID:
          <input
            type="text"
            name="productId"
            value={newProduct.productId}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={newProduct.productName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Selling Price:
          <input
            type="text"
            name="sellingPrice"
            value={newProduct.sellingPrice}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {`${product.productName} - $${product.sellingPrice}`}
            <button onClick={() => handleDeleteProduct(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Total Amount Spent: ${totalAmount}</p>
    </div>
  );
};

export default ProductList;
