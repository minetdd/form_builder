import React, { Component, Fragment } from 'react';
import {
  Box,
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
    const { properties } = this.state;
    properties.push({
      type: item,
      description: null,
      name: null,
    })
  }

  render() {
    const {
      properties,
    } = this.state;
    
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
