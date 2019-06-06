import React from 'react';
import data from './Data';
import './App.css';
import DropDown from './DropDown';

function App() {
  return (
    <div className="App">
      <DropDown 
        data={data} 
        searchOnKey="name" 
        backColor="orange"
        fontColor="white"
        />
    </div>
  );
}

export default App;
