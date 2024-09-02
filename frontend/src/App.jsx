import { useState } from 'react'
import { useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'

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
  
  //   axios
  //     .get(`http://127.0.0.1:8000/artgallery/home/`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setData(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  // axios
  //   .get(`http://127.0.0.1:8000/artgallery/home/`)
  //   // .get(`${import.meta.env.PYTHON_API_URL}${'/home/'}`)
  //   // console.log(`${import.meta.env.PYTHON_API_URL}${'/home/'}`)
  //   .then((response) => console.log(response))
  //   .catch((error) => console.log(error));

  return (
    <>
      <h1>React App</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.description}</li>
        ))}
      </ul>
    </>
  )
}

export default App
