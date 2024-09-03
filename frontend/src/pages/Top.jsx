import { useState, useEffect } from 'react'
import axios from 'axios';

export const Top = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/artgallery/top/');
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
            <div>
            TopPageを表示しています
            <ul>
                {data.map((item) => (
                <li key={item.id}>{item.username}</li>
                ))}
            </ul>
            あいうえおかきくけこ
            </div>
        </> 
    );
};