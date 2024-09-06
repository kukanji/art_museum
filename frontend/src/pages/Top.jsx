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
            <div className="whole-screen">
            <nav>
                <ul>
                    <p>ArtMuseumへようこそ！</p>
                    <p>以下のリンクからアーティストのホームページに行けるよ</p>
                        {elements.map((item) => (
                            <div key={item.id}>
                                <li className="list-row">
                                    <Link to={`/home/${item.id}`}>{item.username}</Link>
                                </li>
                                
                            </div>
                        ))}
                </ul>
            </nav>
            </div>
        </> 
    );
};