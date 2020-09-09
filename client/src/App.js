import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppComponent from './components/AppComponent';
import AddComp from './components/AddComp';
import EditComp from './components/EditComp';
import DetailComp from './components/DetailComp';
import { Router } from '@reach/router'

function App() {
  return (
    <div className="App">
      <Router>
        <AppComponent path="/" />
        <AddComp path="/pet/new" />
        <DetailComp path="/pet/:id" />
        <EditComp path="/pet/:id/edit" />
      </Router>
      
    </div>
  );
}

export default App;
