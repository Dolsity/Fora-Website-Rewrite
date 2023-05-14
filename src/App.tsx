import React, { useEffect, useState } from 'react';
import "./App.scss";
import Navbar from "./shared/components/navbar/Navbar";
import Footer from './shared/components/footer/Footer'
import { ReactComponent as ReactLogo } from "./assets/svg/logo.svg";

export default function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

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
          <br />
          {data && (
            <div>
              <p>{data.message}</p>
              <ul>
                {data.data.map((item: number) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </header>
      </div>
      <Footer />
    </>
  );
}