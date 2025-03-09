import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Box, Typography, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
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
            <Container maxWidth="lg" sx={{ mt: 3, display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
                <Box sx={{ mt: 3, display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        <SquareIcon sx={{ mr: 0.5  }}></SquareIcon>Welcome to the ArtMuseum
                    </Typography>
                    <Typography variant="body1">下記のリンクからアーティストのページが見れるよ</Typography>
                </Box>
                <Box sx={{ mt: 3, width: '450px', backgroundColor: 'white', p: 2, boxShadow: 3, borderRadius: 2, display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
                        <SquareIcon sx={{ mr: 0.4, fontSize: '1.2rem' }}></SquareIcon>ARTISTS
                    </Typography>
                    <List>
                        {elements.map((item) => (
                            <ListItem key={item.id} disablePadding>
                                <ListItemButton component={Link} to={`/home/${item.id}`} sx={{
                                    '&:hover': {
                                        color: 'primary.main',
                                    }
                                }}>
                                    <ListItemText primary={item.username} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Container>
        </>
    );
};