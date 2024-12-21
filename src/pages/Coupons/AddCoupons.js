import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AddCoupons() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [offerAmount, setOfferAmount] = useState('');
    const [discount, setDiscount] = useState('');
    const [startDate, setStartDate] = useState('');
    const [expiryDate, setExpiryDate] = useState('');

    const handleAddSubmit = async (e) => {
        e.preventDefault();

        const couponData = {
            CouponName: name,
            OfferAmount: offerAmount,
            Discount: discount,
            OfferAvailable: startDate,
            ExpiryDate: expiryDate,
        };

        try {
            const response = await fetch('http://localhost:3000/api/coupons/createCoupon', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(couponData),
            });

            console.log('Response:', response); // Log the response

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to create coupon');
            }

            const data = await response.json();
            alert('Coupon created successfully!');
            navigate('/coupons');
        } catch (error) {
            console.error('Error creating coupon:', error.message);
            alert('Error creating coupon: ' + error.message);
        }
    };


    return (
        <Box sx={{ padding: 2 }}>
            <Typography
                variant="h5"
                gutterBottom
                sx={{
                    fontWeight: "bold",
                    fontSize: { xs: '20px', sm: '25px' },
                    fontFamily: "Lexend, serif",
                    color: "#493628"
                }}
            >
                Add Coupon
            </Typography>

            <form onSubmit={handleAddSubmit}>
                <Grid container spacing={2} sx={{ marginTop: "50px" }}>
                    <Grid item xs={4}>
                        <TextField
                            label="Offer Name"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Offer Amount"
                            variant="outlined"
                            fullWidth
                            value={offerAmount}
                            onChange={(e) => setOfferAmount(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Discount Percentage"
                            variant="outlined"
                            fullWidth
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Start Date"
                            variant="outlined"
                            fullWidth
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Expiry Date"
                            variant="outlined"
                            fullWidth
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{
                                backgroundColor: "#493628",
                                '&:hover': {
                                    backgroundColor: "#AB886D",
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}

export default AddCoupons;