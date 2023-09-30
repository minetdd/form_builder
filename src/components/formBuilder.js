import React, { Fragment, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  Grid,
  Radio,
  Rating,
  Select,
  TextField,
} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';

const FormBuilder = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [buttonTitle, setButtonTitle] = useState("Button Title");
  const [buttonVariant, setButtonVariant] = useState('outlined');
  const [textFieldTitle, setTextFieldTitle] = useState("Text Field");
  const [dateFieldLabel, setDateFieldLabel] = useState("Date Field");

  const {
    properties,
  } = props;

  useEffect(() => console.log(title), [title]);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  }

  const descHandler = (e) => {
    setDescription(e.target.value);
  }

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
            onChange={titleHandler}
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
            value={description}
            onChange={descHandler}
            />
        </Grid>
      </Grid>
      <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', width: '100%' }}
        >
        {
          properties.map(i => (
            <Card
              sx={{
                width: '100%',
                padding: '20px',
              }}
              >
              {
                (() => {
                  switch(i.type) {
                    case 'button':
                      return <Button fullWidth variant={buttonVariant}>{buttonTitle}</Button>;
                    case 'checkbox':
                      return <Checkbox />;
                    case 'input':
                        return <TextField fullWidth label={textFieldTitle} />;
                    case 'select':
                        return <Select />;
                    case 'rating':
                        return <Rating />;
                    case 'radio':
                        return <Radio />;
                    case 'divider':
                        return <Divider variant="fullWidth" />;
                    case 'dateField':
                        // return <DatePicker label={dateFieldLabel} />;
                        return (
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateField']}>
                              <DateField label={dateFieldLabel} />
                            </DemoContainer>
                          </LocalizationProvider>
                        )
                    default:
                      return;
                  }
                })()
              }
            </Card>
          ))
        }
      </Box>
    </Fragment>
  )
}

export default FormBuilder;
