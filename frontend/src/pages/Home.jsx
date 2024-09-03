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
        <div>
            Home.jsxのページを表示しています。
            <p>{params.artist_id}</p>
            <nav>
                <ul>
                    {data.map((item) => (
                        <div key={item.id}>
                            <li>
                                {/* <Link to={`/home/${item.id}`}>link to {item.username} home</Link> */}
                                <p>{item.description}</p>
                            </li>
                            
                        </div>
                    ))}
                    
                </ul>
            </nav>
        </div>
    );
};