import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Box, Button, AppBar, Toolbar, Typography } from '@mui/material';

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
                                            color: 'primary.main',
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