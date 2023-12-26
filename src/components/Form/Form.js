import { useState } from "react";

function Form(prop) {
  const [productOriginal, setProduct] = useState("");
  const [sellingOriginal, setSelling] = useState("");
  const [productNameOriginal, setProductName] = useState("");

  const productOriginalHandler = (event) => {
    setProduct(event.target.value);
  };
  const sellingOriginalHandler = (event) => {
    setSelling(event.target.value);
  };
  const productNameOriginalHandler = (event) => {
    setProductName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formObject = {
      productId: productOriginal,
      sellingPrice: sellingOriginal,
      productName: productNameOriginal,
      id: Math.random(),
    };
    prop.onForm(formObject);
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Product Id</label>
      <input type="number" onChange={productOriginalHandler} />
      <label>Selling Price</label>
      <input type="number" onChange={sellingOriginalHandler} />
      <label>Product Name</label>
      <input type="text" onChange={productNameOriginalHandler} />
      <button>Add Product</button>
    </form>
  );
}
export default Form;
