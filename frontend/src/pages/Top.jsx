import { Link } from "react-router-dom";
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
            <nav>
                <ul>
                    {data.map((item) => (
                        <div key={item.id}>
                            <li>
                                <Link to={`/home/${item.username}`}>link to {item.username} home</Link>
                            </li>
                            
                        </div>
                    ))}
                    
                </ul>
            </nav>
            あいうえおかきくけこ
            </div>
        </> 
    );
};