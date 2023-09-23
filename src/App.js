import React, { Component } from 'react';
import './App.css';
import FormBuilder from './components/formBuilder';
import FormContainers from './components/formContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <FormBuilder /> */}
        <FormContainers />
      </div>
    );
  }
}

export default App;
