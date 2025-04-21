import { AppBar, Toolbar, Typography, Button, Box, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../assets/react.svg'; // Adjust the path as necessary

const NavBar = () => {
    const [language, setLanguage] = React.useState('en');

    const handleLanguageChange = (event: any) => {
        setLanguage(event.target.value);
    };

    return (
        <Box
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: 1100,
                /*mx: 2, // margin left and right*/
                borderRadius: 2,
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
            }}
        >
            <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent' }}>
                <Toolbar>
                    {/* Logo */}
                    <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', mr: 2 }}>
                        <img src={logo} alt="Logo" style={{ height: 40, marginRight: 10 }} />
                        <Typography variant="h6" noWrap>
                            Sri Lanka Event Calendar
                        </Typography>
                    </Box>

                    {/* Navigation Buttons */}
                    <Box sx={{ flexGrow: 1 }}>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/about">About</Button>
                        <Button color="inherit" component={Link} to="/helps">Helps</Button>
                    </Box>

                    {/* Language Selector */}
                    <Select
                        value={language}
                        onChange={handleLanguageChange}
                        variant="outlined"
                        size="small"
                        sx={{
                            color: 'white',
                            borderColor: 'white',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(255, 255, 255, 0.5)',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '& .MuiSvgIcon-root': {
                                color: 'white',
                            },
                        }}
                    >
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="si">සිංහල</MenuItem>
                        <MenuItem value="ta">தமிழ்</MenuItem>
                    </Select>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
