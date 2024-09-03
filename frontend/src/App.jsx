// import { useState, useEffect } from 'react'
// import axios from 'axios';
import './App.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Top } from './pages/Top'
import { Home } from './pages/Home'

function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get('http://127.0.0.1:8000/artgallery/home/');
  //       console.log(response.data);
  //       setData(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <>
      App.jsxのページを表示しています
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/home/:artist_id" element={<Home />} />
          </Routes>
      </BrowserRouter>
      {/* <ul>
        {data.map((item) => (
          <li key={item.id}>{item.artist}</li>
        ))}
      </ul> */}
    </>
  )
}

export default App
