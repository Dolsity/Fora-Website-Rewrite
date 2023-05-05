import React from "react";
import { ReactComponent as ReactLogo } from "./assets/svg/logo.svg";
import "./App.scss";
import Navbar from "./shared/components/navbar/Navbar";
import Footer from './shared/components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <ReactLogo className="App-logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Footer />
    </>
  );
}

export default App;
