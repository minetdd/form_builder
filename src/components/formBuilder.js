import React, { Fragment } from 'react';
import {
  Box,
  Card
} from '@mui/material';

const FormBuilder = (props) => {
  console.log('props', props);
  return (
    <Fragment>
      <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
        <Card
          sx={{
            minWidth: '75%'
          }}>
          Form Component on a card
        </Card>
      </Box>
    </Fragment>
  )
}

export default FormBuilder;
