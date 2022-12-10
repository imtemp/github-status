import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch("http://localhost:2020/status")).json();
      setData(data);
    };

    dataFetch();
  }, []);

  return (
    <div className="App">
      <h1>GitHub Status</h1>
      <div className="status-list">
        {data.map((data) => {
          return (
            <div className="statusCard" key={data.position}>
              <p className="name">{data.name}</p>
              <p className="status">{data.status}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
