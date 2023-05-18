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
          {data && (
            <div>
              <p>{data.message}</p>
            </div>
          )}
        </header>
      </div>
      <Footer />
    </>
  );
}
