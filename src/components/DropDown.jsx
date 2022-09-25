import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import api from '../services/api'

import {
  getTopCategories,
  getCategoryName
} from '../services/utilities'


export default function DropDown(props) {
    const [categories, setCategories] = React.useState([]);

    React.useEffect(() => {
      const getData = async () => {
        const result = await api(props.row);
        const topCats = getTopCategories(result.data[0])
        setCategories(topCats)
    }
        getData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
  const [selectedCategory, setSelectedCategory] = React.useState('');

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCategory}
          displayEmpty
          label="selectedCategory"
          onChange={handleChange}
        >
            {
                categories.map((category) => {
                    return (
                        <MenuItem 
                            value={category.label}
                            id={category.label}
                        >
                                {getCategoryName(category.label)}
                                 ( {
                                        (category.score * 100).toString().substring(0, 5)
                                    }%)
                        </MenuItem>
                    )
                })
            }
          <MenuItem value={0}>No Matching Category</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}