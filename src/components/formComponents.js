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
              onClick={() => {
                props.addElement('button');
              }}
              >
              <ListItemText primary="Button" />
            </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton
              onClick={() => {
                props.addElement('input');
              }}
              >
              <ListItemText primary="Input" />
            </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton
              onClick={() => {
                props.addElement('select');
              }}
              >
              <ListItemText primary="Drop Down" />
            </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton
              onClick={() => {
                props.addElement('rating');
              }}
              >
              <ListItemText primary="Rating" />
            </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton
              onClick={() => {
                props.addElement('textarea');
              }}
              >
              <ListItemText primary="Comment" />
            </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton
              onClick={() => {
                props.addElement('checkbox');
              }}
              >
              <ListItemText primary="Checkbox" />
            </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton
              onClick={() => {
                props.addElement('radio');
              }}
              >
              <ListItemText primary="Radio Button" />
            </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton
              onClick={() => {
                props.addElement('divider');
              }}
              >
              <ListItemText primary="Divider Line" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Fragment>
  )
}

export default FormComponents;
