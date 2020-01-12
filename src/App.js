import React from 'react';
import './App.css';


import { Header, Footer, Content, Headernav } from './components'
// import APITest from './components/APITest'


function App() {
  return (
    <div className="App">
      <Header />
      <Headernav />
      {/* <APITest /> */}
      <Content />
      <Footer />
    </div>
  );
}

export default App;
