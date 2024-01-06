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
  // Menu,
  MenuItem,
  Radio,
  Rating,
  Select,
  TextField,
} from '@mui/material';
import { camelCase } from 'lodash';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";
// import FormBuilderCard from './formBuilderCard';



const FormBuilder = (props) => {
  const intialFormBuild = {
    title: null,
    description: null,
    type: "object",
    required: [],
    properties: {},
  };

  // const [state, dispatch] = useReducer(reducer, intialFormBuild);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [buttonTitle, setButtonTitle] = useState("Button Title");
  const [buttonVariant, setButtonVariant] = useState('outlined');
  const [textFieldTitle, setTextFieldTitle] = useState("Text Field");
  const [dateFieldLabel, setDateFieldLabel] = useState("Date Field");
  const [open, setOpen] = useState(false);
  const [fieldType, setFieldType] = useState('0');
  const [fieldLabel, setFieldLabel] = useState('');
  const [fieldDefault, setFieldDefault] = useState('');
  const [temp, setTemp] = useState('');
  // const [save, dispatch] = useReducer(reducer, intialFormBuild.properties);
  
  const {
    properties,
    updateProperties,
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

  // useEffect(() => console.log(fieldType), [fieldType]);

  const handleFieldLabel = (e) => {
    // create camelCase for property name
    let label = camelCase(e.target.value);
    
    setFieldLabel(e.target.value);
  }

  // useEffect(() => console.log(fieldLabel), [fieldLabel]);

  const handleFieldDefault = (e) => {
    setFieldDefault(e.target.value);
  }

  // useEffect(() => console.log(fieldDefault), [fieldDefault]);

  const handleOnDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!result.destination) return;
    props.updateProperties(result);
  }

  const handleFieldSave = (e) => {
    // updateBuildForm(1,2);
    console.log(intialFormBuild)
  }

  const updateBuildForm = (state, action) => {
    // console.log('updateBuildForm', state, action);
    switch (action.type) {
      case 'save':
        return {
          type: state,
          title: state,
          default: state
        }
        
    }
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
      <DragDropContext
        onDragEnd={handleOnDragEnd}
        >
        <Droppable
          droppableId="cardBox"
          >
          {(provided, snapshot) => (
            <Box
              component="span"
              sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', width: '100%' }}
              {...provided.droppableProps}
              ref={provided.innerRef}
              >
                {
                  properties.map((i, index) => (
                    <Draggable
                      draggableId={`${i.type}`}
                      index={index}
                      key={`${i.type}`}
                      >
                      {provided => (
                        <Card
                          sx={{
                            width: '100%',
                            padding: '20px',
                          }}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
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
                              EDIT {i.type} now
                            </Button>
                          </CardActions>
                        </Card>
                      )}
                    </Draggable>
                  ))
                }
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
      {
        open && (
          <Dialog
            open={open}
            onClose={handleEditComponent}
            >
            <DialogTitle>Field Data</DialogTitle>
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
                value={fieldLabel}
                onChange={handleFieldLabel}
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
                value={fieldDefault}
                onChange={handleFieldDefault}
                />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleFieldSave}
                // onClick={()=>console.log('Save field values')}
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
