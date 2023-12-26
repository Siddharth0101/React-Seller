import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { useState } from "react";
import Total from "./components/Total/Total";
function App() {
  const [formData, setFormData] = useState([]);
  const getDataFromForm = (objectForm) => {
    setFormData((prev) => {
      return [...prev, objectForm];
    });
  };
  return (
    <div>
      <Form onForm={getDataFromForm} />
      <List userData={formData} />
      <Total></Total>
    </div>
  );
}

export default App;
