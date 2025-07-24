import React, {useState} from "react";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";
import './App.css';


function App() {

  const [searchQuery, setSearchQuery] = useState('')

  return(
    <div className='site-content'>
      <Header city={searchQuery} setCity={setSearchQuery} />
      <Content selectedCity={searchQuery}/>
      <Footer />
    </div>
  );
}

export default App;
