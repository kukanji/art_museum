import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Top } from './pages/Top'
import { Home } from './pages/Home'

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/artgallery/home/');
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h1>ArtMuseum</h1>
      <BrowserRouter>
        <div>
          <Link to="/">Top</Link>
          <Link to="/home">Home</Link>
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.artist}</li>
        ))}
      </ul>
    </>
  )
}

export default App
