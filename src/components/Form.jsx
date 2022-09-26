/* eslint-disable no-restricted-globals */
import { Typography, TextField, Button, Select, MenuItem } from "@mui/material";
import Divider from "@mui/material/Divider";
import * as React from "react";

import { getTopCategories } from "../services/utilities";

import CategoryList from "./CategoryList";

import api from "../services/api";

export default function Form() {
  const [sicText, setSicText] = React.useState("");
  const [productName, setproductName] = React.useState("");
  const [productDescription, setproductDescription] = React.useState("");
  const [categories, setCategories] = React.useState([]);
  const [isResult, setIsResult] = React.useState(false);

  const data = {
    name: productName,
    sender_name: productDescription,
    SIC: sicText,
  };

  const formClear = () => {
    setCategories([]);
  };
  const getData = async () => {
    const result = await api(data);
    const topCats = getTopCategories(result.data[0]);
    setCategories(topCats);
    setIsResult(!isResult);

    console.log("Categories::::;", categories);
  };

  const formSubmit = async () => {
    await getData();
  };

  const suppliers = [
    {
      name: "DAHL SVERIGE AB",
      sicCode: 5074,
      sicTexts: "Plumbing and Heating Equipment and Supplies (Hydronics)",
    },
    {
      name: "AJ Produkter AB",
      sicCode: 5021,
      sicTexts: "Furniture",
    },
    {
      name: "Sogeti Sverige AB",
      sicCode: 7371,
      sicTexts: "Computer Programming Services",
    },
  ];

  const handleChange = (event) => {
    setSicText(event.target.value);
  };

  return (
    <div>
      <form align="left" onSubmit={formSubmit}>
        <Typography align="left">Add line item details</Typography>

        <Select
          style={{ width: "200px", margin: "5px" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sicText}
          label="Supplier"
          onChange={handleChange}
        >
          {suppliers.map((supplier) => (
            <MenuItem value={supplier.sicTexts}>{supplier.name}</MenuItem>
          ))}
        </Select>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="Line Item Name"
          label="Product Name"
          variant="outlined"
          onChange={(event) => setproductName(event.target.value)}
        />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Line Item Description"
          variant="outlined"
          onChange={(event) => setproductDescription(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          id="form-submit-button"
          onClick={formSubmit}
        >
          Categorize
        </Button>
        <Button
          style={{ width: "200px", margin: "5px" }}
          variant="contained"
          color="primary"
          id="form-submit-button"
          onClick={formClear}
        >
          Clear Results
        </Button>
      </form>
      <br />
      {categories.length > 0 ? <CategoryList list={categories} /> : null}
      <Divider />
    </div>
  );
}
