import React, { Component } from 'react';
import './App.css';
import Grid from 'material-ui/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <h1>
              Hello World
            </h1>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
