import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/Header';
import { Paragraph } from './Components/Paragraph/Paragraph';




// const TestData = () => (
//   <p>test: {data.name}</p>
// )

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <Header/>
      <Paragraph />
  
    </div>
  );
}

export default App;
