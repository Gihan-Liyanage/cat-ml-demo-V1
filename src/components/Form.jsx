/* eslint-disable no-restricted-globals */
import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem
} from "@mui/material";
import Divider from '@mui/material/Divider';
import * as React from "react";

import {
    getTopCategories,
    getCategoryName
} from '../services/utilities';

import api from "../services/api";

export default function Form() {
    const [sicText, setSicText] = React.useState('');
    const [productName, setproductName] = React.useState('');
    const [productDescription, setproductDescription] = React.useState('');
    const [categories, setCategories] = React.useState([]);

    const data = {
        name: productName,
        sender_name: productDescription,
        SIC: sicText
    }

    const getData = async () => {
        const result = await api(data);
        const topCats = getTopCategories(result.data[0])
        setCategories(topCats)

        console.log('Categories::::;', categories);

    }

    const formSubmit = async () => {
        await getData ()
    }

    const suppliers = [
        {
            name: 'Qvalia AB',
            sicCode: 234534,
            sicTexts: 'Sample Text'
        },
        {
            name: 'Qvalia AB',
            sicCode: 45323,
            sicTexts: 'Sample Text II'
        },
        {
            name: 'Qvalia AB',
            sicCode: 54564,
            sicTexts: 'Sample Text III'
        }
    ]

    const handleChange = (event) => {
        setSicText(event.target.value);
      };
    
  return (
    <div >
      <form align='left' onSubmit={formSubmit}>
        <Typography align='left'>Add required details</Typography>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sicText}
          label="Supplier"
          onChange={handleChange}
        >
            {suppliers.map(supplier => <MenuItem value={supplier.sicTexts}>{supplier.name}</MenuItem>
            )}
        </Select>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="Line Item Name"
          label="Product Name"
          variant="outlined"
          onChange={() => setproductName(event.target.value)}
        />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Line Item Description"
          variant="outlined"
          onChange={() => setproductDescription(event.target.value)}
        />
        <Button variant="contained" color="primary" id="form-submit-button" onClick={formSubmit}>
          Categorize
        </Button>
      </form>
    
      <Typography align='left' variant="h3">Add required details</Typography>
      {categories.map((category) => {
          return <Typography variant="h5" component="h2">{getCategoryName(category.label)}</Typography>
      })}
      

      <br />
      <Divider />
    </div>
  );
}
