import './App.css';
import React from 'react'
import Home from "./Home"
import SceneProvider from "./context/SceneProvider"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <SceneProvider>
        <Home></Home>
      </SceneProvider>
    </>
  );
}

export default App;
