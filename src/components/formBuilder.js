import React, { Component, Fragment } from 'react';
import Form from "react-jsonschema-form";
import schema from './schema.json';
import ui_schema from './ui_schema.json';

class FormBuilder extends Component {
  render() {
    return (
      <Fragment>
        form to display
        <Form
          schema={schema}
          uiSchema={ui_schema}
          liveValidate
          >
          <div />
        </Form>
      </Fragment>
    )
  }
}

export default FormBuilder;
