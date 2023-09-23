import React, { Component, Fragment } from 'react';
import {
  Button,
} from '@mui/material';

const FormComponent2 = (props) => {
  const click = props.onClick;
  return (
    <Fragment>
      <Button
        onClick={click}
        >
        Test
      </Button>
    </Fragment>
  )
}

export default FormComponent2;
