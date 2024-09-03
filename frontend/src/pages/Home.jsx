import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios';

export const Home = () => {
    const params = useParams();
    console.log(params);
    const [data, setData] = useState([]);
    useEffect(() => {
    const getData = async () => {
      try {
        // const response = await axios.get(`${import.meta.env.VITE_API_URL}/home/`);
        console.log(`artist_id:${params.artist_id}`);
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/home/${params.artist_id}/`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
    }, []);
    return (
        <div>
            Home.jsxのページを表示しています。

            <p>{data.description}</p>
            {/* <nav>
                <ul>
                    {data.map((item) => (
                        <div key={item.id}>
                            <li>
                                <p>{item.description}</p>
                            </li>
                            
                        </div>
                    ))}
                    
                </ul>
            </nav> */}
        </div>
    );
};