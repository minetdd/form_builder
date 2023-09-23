import React, { Component, Fragment } from 'react';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

const FormComponents = (props) => {
  return (
    <Fragment>
      <Box
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        style={{maxHeight: '100%', overflow: 'auto'}}
        >
        <List>
          <ListItem>
            <ListItemButton
              key={'button'}
              onClick={e => props.addElement(e.key)}
              >
              <ListItemText primary="Button" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Input" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Drop Down" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Rating" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Comment" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Checkbox" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Radio Button" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Divider Line" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Fragment>
  )
}

export default FormComponents;
