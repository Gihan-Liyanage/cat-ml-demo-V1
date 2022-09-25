/* eslint-disable no-restricted-globals */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { prodData } from '../data/productData.js';
import DropDown from './DropDown.jsx';

function Row(props) {
  const { row } = props;

  
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>    
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{row.sender_name}</TableCell>
        <TableCell align="right">{row.product_number}</TableCell>
        <TableCell align="right">{row.unit}</TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">
            <DropDown row={row}/>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = prodData;

export default function LineItemTable() {
    // console.log((prodData))
    React.useEffect(() => {
    },[])
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Count</TableCell>
            <TableCell align="right">Sender</TableCell>
            <TableCell align="right">Product No.</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Item</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
