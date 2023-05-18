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
              <p>{data.username}</p>
              <p>{data.user_avatar}</p>
              <p>{data.user_wallet}</p>
              <p>{data.user_bank}</p>
              <p>{data.user_total_balance}</p>
              <p>{data.user_job}</p>
              <p>{data.user_user_hours}</p>
            </div>
          )}
        </header>
      </div>
      <Footer />
    </>
  );
}