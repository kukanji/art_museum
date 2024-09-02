// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'

function App() {

  axios
      .get(`${import.meta.env.PYTHON_API_URL}${'/home/'}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

  return (
    <>
      hello
    </>
  )
}

export default App
