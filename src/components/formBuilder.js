import React, { Fragment, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Menu,
  MenuItem,
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
  const intialFormBuild = {
    title: null,
    description: null,
    type: "object",
    required: [],
    properties: {},
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [buttonTitle, setButtonTitle] = useState("Button Title");
  const [buttonVariant, setButtonVariant] = useState('outlined');
  const [textFieldTitle, setTextFieldTitle] = useState("Text Field");
  const [dateFieldLabel, setDateFieldLabel] = useState("Date Field");
  const [open, setOpen] = useState(false);
  const [fieldType, setFieldType] = useState('0');
  
  const {
    properties,
  } = props;

  const titleHandler = (e) => {
    setTitle(e.target.value);
  }

  const descHandler = (e) => {
    setDescription(e.target.value);
  }

  const handleEditComponent = (e) => {
    setOpen(!open);
  }

  const handleFieldTypeChange = (e) => {
    setFieldType(e.target.value);
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
              <CardContent>
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
              </CardContent>
              <CardActions>
                <Button
                  value="button"
                  onClick={handleEditComponent}
                  >
                  EDIT {i.type}
                </Button>
              </CardActions>
            </Card>
          ))
        }
      </Box>
      {
        open && (
          <Dialog
            open={open}
            onClose={handleEditComponent}
            >
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To generate a form, you must complete the fields below
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Field Label"
                fullWidth
                variant="outlined"
                />
              <Select
                fullWidth
                labelId="fieldType"
                id="field-type-select"
                value={fieldType}
                label={"Field Type"}
                onChange={handleFieldTypeChange}
                required
                >
                <MenuItem value="0">Field Type</MenuItem>
                <MenuItem value="string">String</MenuItem>
                <MenuItem value="date">Date</MenuItem>
                <MenuItem value="email">Email</MenuItem>
                <MenuItem value="number">Number</MenuItem>
                <MenuItem value="tel">Telephone</MenuItem>
              </Select>
              <TextField
                margin="dense"
                id="name"
                label="Default Value"
                fullWidth
                variant="outlined"
                />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={()=>console.log('Save field values')}
                >
                SAVE
              </Button>
              <Button
                onClick={()=>console.log('Cancel field values')}
                >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        )
      }
    </Fragment>
  )
}

export default FormBuilder;
