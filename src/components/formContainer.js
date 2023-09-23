import React, { Component, Fragment } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  styled
} from '@mui/material';
import FormComponents from './formComponents';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class FormContainers extends Component {
  addElement = (item) => console.log(item);
  render() {
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
              <Item>Form builder</Item>
            </Grid>
          </Grid>
        </Box>
        <br />
        <br />

      </Fragment>
    )
  }
}

export default FormContainers;
