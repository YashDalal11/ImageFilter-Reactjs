import React, {useState} from 'react'
import './App.css';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';
import Copyright from './components/Copyright';

function App() {
  const [mainContentLoader, setMainContentLoader] = useState("Chooser");
  const navTabs =(id) =>{
    setMainContentLoader(id)
  }
  return (
    <div className="App">
      <Navbar />
      <Tabs navTabs={navTabs}/>
      <MainContent mainContentLoader={mainContentLoader}/>
      <Copyright />
    </div>
  );
}

export default App;
