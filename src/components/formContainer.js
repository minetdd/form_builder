import React, { Component, Fragment, useState } from 'react';
import {
  Box,
  // Card,
  Grid,
  Paper,
  styled
} from '@mui/material';
import FormComponents from './formComponents';
import FormBuilder from './formBuilder';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class FormContainers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
      type: "object",
      required: [],
      properties: [],
    }
  }
  
  addElement = (item) => {
    const newItem = {
      type: item,
      description: null,
      name: null,
    };
    this.setState({
      ...this.state.properties,
      properties: [...this.state.properties, newItem]
    })
  }

  updateProperties = (item) => {
    const items = Array.from(this.state.properties);
    const [reordered] = items.splice(item.source.index, 1);

    items.splice(item.destination.index, 0, reordered);

    this.setState({
      ...this.state.properties,
      properties: items,
    });
  }

  render() {
    const { properties } = this.state;
    return (
      <Fragment>
        <Box
          sx={{ 
            flexGrow: 1,
          }}
          >
          <Grid
            container
            spacing={2}
            >
            <Grid
              item
              xs={2}
              >
              <Item>
                <FormComponents
                  addElement={this.addElement}
                  />
              </Item>
            </Grid>
            <Grid
              item
              xs={10}
              >
              <Item>
                <FormBuilder
                  properties={properties}
                  updateProperties={this.updateProperties}
                  />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Fragment>
    )
  }
}

export default FormContainers;
