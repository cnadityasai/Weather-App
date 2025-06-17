import React from "react";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";
import './App.css';


function App() {
  return(
    <div className='site-content'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
