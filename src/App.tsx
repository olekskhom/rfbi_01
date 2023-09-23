import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/Header';
import { Paragraph } from './Components/Paragraph/Paragraph';
import data from './Components/data.json'





function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <Header/>
      <Paragraph />
          <ul>
          {data.map((item) => (
            <li key={item.id}>
              Name: {item.name}, Age: {item.age}
            </li>
          ))}
        </ul>

  
    </div>
  );
}

export default App;
