import React from 'react';
import './App.css';


import { Header, Footer, Content, Headernav } from './components'



function App() {
  return (
    <div className="App">
      <Header />
      <Headernav />
      <Content />
      <Footer />
      {/* <APITest /> */}
    </div>
  );
}

export default App;
