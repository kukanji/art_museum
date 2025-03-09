import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Box, Typography, Divider } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';

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
            <Container>
                <Box sx={{ mt: 3, display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center' }}>
                        <SquareIcon sx={{ mr: 0.5  }}></SquareIcon>Welcome to the ArtMuseum
                    </Typography>
                    <Divider sx={{ borderColor: "black", borderWidth: 1, mb: 2 }} />
                    <Typography variant="body1">下記のリンクからアーティストのページが見れるよ</Typography>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <ul>
                        {elements.map((item) => (
                            <li key={item.id} className="list-row">
                                <Link 
                                    to={`/home/${item.id}`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Typography 
                                        variant="body1"
                                        sx={{
                                            color: '#000000',
                                            '&:hover': {
                                                color: 'primary.dark',
                                            }
                                        }}
                                    >
                                        {item.username}
                                    </Typography>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Box>
            </Container>
        </>
    );
};