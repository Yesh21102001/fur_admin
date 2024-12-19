import React, { useState } from 'react';
import { TextField, Button, Avatar, Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AddCoupons() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [startDate, setStartDate] = useState('');  
    const [expiryDate, setExpiryDate] = useState('');  

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = () => {
        console.log('Offer Name:', name);
        console.log('Offer Image:', image);
        console.log('Start Date:', startDate);
        console.log('Expiry Date:', expiryDate);
        navigate('/coupons');
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", fontSize: { xs: '20px', sm: '25px' }, fontFamily: "Lexend, serif", color: "#493628" }}>
                Add Coupon
            </Typography>

            <Grid container spacing={2} sx={{ marginTop: "50px" }}>
                {/* Offer Name Field */}
                <Grid item xs={4}>
                    <TextField
                        label="Offer Name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{
                            fontFamily: "Lexend, serif",
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#493628',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#493628',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#493628',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                fontFamily: "Lexend, serif",
                            },
                            '& .MuiInputBase-input::placeholder': {
                                fontFamily: "Lexend, serif",
                            }
                        }}
                    />
                </Grid>
                {/* Offer Amount Field */}
                <Grid item xs={4}>
                    <TextField
                        label="Offer Amount"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{
                            fontFamily: "Lexend, serif",
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#493628',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#493628',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#493628',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                fontFamily: "Lexend, serif",
                            },
                            '& .MuiInputBase-input::placeholder': {
                                fontFamily: "Lexend, serif",
                            }
                        }}
                    />
                </Grid>
                {/* Discount Percentage Field */}
                <Grid item xs={4}>
                    <TextField
                        label="Discount Percentage"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{
                            fontFamily: "Lexend, serif",
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#493628',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#493628',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#493628',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                fontFamily: "Lexend, serif",
                            },
                            '& .MuiInputBase-input::placeholder': {
                                fontFamily: "Lexend, serif",
                            }
                        }}
                    />
                </Grid>
                {/* Start Date Field */}
                <Grid item xs={4}>
                    <TextField
                        label="Start Date"
                        variant="outlined"
                        fullWidth
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        sx={{
                            fontFamily: "Lexend, serif",
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#493628',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#493628',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#493628',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                fontFamily: "Lexend, serif",
                            },
                            '& .MuiInputBase-input::placeholder': {
                                fontFamily: "Lexend, serif",
                            }
                        }}
                    />
                </Grid>
                {/* Expiry Date Field */}
                <Grid item xs={4}>
                    <TextField
                        label="Expiry Date"
                        variant="outlined"
                        fullWidth
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        sx={{
                            fontFamily: "Lexend, serif",
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#493628',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#493628',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#493628',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                fontFamily: "Lexend, serif",
                            },
                            '& .MuiInputBase-input::placeholder': {
                                fontFamily: "Lexend, serif",
                            }
                        }}
                    />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                    <Button variant="contained" onClick={handleSubmit} sx={{
                            backgroundColor: "#493628",
                            width: { xs: '150px', sm: 'auto' },
                            color: "white",
                            fontWeight: "300",
                            fontFamily: "Lexend, serif",
                            '&:hover': {
                                backgroundColor: "#AB886D",
                            }
                        }}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AddCoupons;
