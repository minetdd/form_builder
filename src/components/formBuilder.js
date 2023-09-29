import React, { Fragment, useState } from 'react';
import {
  Box,
  Card,
  Grid,
  TextField,
} from '@mui/material';

const FormBuilder = (props) => {
  const [title, setTitle] = useState("")
  const {
    properties,
  } = props;
  return (
    <Fragment>
      <Grid
        container
        spacing={2}
        >
        <Grid
          item
          xs={12}
          >
          <TextField
            required
            fullWidth
            id="form-title"
            label="Form Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              console.log(`Title is ${title}`)
            }}
            />
        </Grid>
        <Grid
          item
          xs={12}
          >
          <TextField
            fullWidth
            id="form-description"
            label="Form Description"
            />
        </Grid>
      </Grid>
      <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
        {
          properties.map(i => (
            <Card>
              {i.type}
            </Card>
          ))
        }
      </Box>
    </Fragment>
  )
}

export default FormBuilder;
