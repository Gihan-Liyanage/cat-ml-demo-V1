import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";

import { getCategoryName } from "../services/utilities";

export default function CategoryList(props) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Typography>Category Results:</Typography>
      {props.list.map((listitem) => {
        return (
          <ListItem>
            <ListItemText
              primary={getCategoryName(listitem.label)}
              secondary={(listitem.score * 100).toString().substring(0, 5) + ' %'}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
