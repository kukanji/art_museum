import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios';

export const Top = () => {
    const [elements, setElements] = useState([]);
    useEffect(() => {
    const fetchElements = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/top/`);
        console.log(response.data);
        setElements(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchElements();
    }, []);

    return (
        <>
            <div>
            TopPageを表示しています
            <nav>
                <ul>
                    {elements.map((item) => (
                        <div key={item.id}>
                            <li>
                                <Link to={`/home/${item.id}`}>link to {item.username} home</Link>
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