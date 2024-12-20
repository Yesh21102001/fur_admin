import React, { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Coupons = () => {
    const navigate = useNavigate();
    const [coupons, setCoupons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/Coupons/getAllCoupons')
            .then((response) => {
                if (Array.isArray(response.data.data)) {
                    setCoupons(response.data.data);
                } else {
                    setCoupons([]);  
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching Coupons:', err);
                setError('Failed to load Coupons');
                setLoading(false);
            });
    }, []);

    const handleAddCoupon = () => {
        navigate("/addcoupon");
    };

    const handleEditCoupon = (id) => {
        navigate(`/updatecoupon/${id}`);
    };

    const handleDeleteCoupon = async (id) => {
        try {
            await fetch(`/api/coupons/${id}`, { method: "DELETE" });
            setCoupons((prev) => prev.filter((coupon) => coupon.id !== id));
        } catch (error) {
            console.error("Error deleting coupon:", error);
        }
    };

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography>{error}</Typography>;
    }

    return (
        <Box>
            <Box
                sx={{
                    padding: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "20px", sm: "25px" },
                        fontFamily: "Lexend, serif",
                        color: "#493628",
                    }}
                >
                    Coupons
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddCoupon}
                    sx={{
                        backgroundColor: "#493628",
                        width: { xs: "150px", sm: "auto" },
                        color: "white",
                        fontWeight: "300",
                        fontFamily: "Lexend, serif",
                        "&:hover": {
                            backgroundColor: "#AB886D",
                        },
                    }}
                >
                    Add Coupons
                </Button>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {coupons.length > 0 ? (
                    coupons.map((coupons) => (
                        <Box
                            key={coupons.CouponId}
                            sx={{
                                height: "300px",
                                width: "380px",
                                backgroundColor: "#D6C0B3",
                                borderRadius: "10px",
                                padding: 2,
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                                },
                            }}
                        >
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{
                                    fontWeight: "500",
                                    textAlign: "center",
                                    fontFamily: "Lexend, serif",
                                }}
                            >
                                {coupons.CouponName}
                            </Typography>
                            <Box>
                                <Typography>ID: {coupons.CouponId}</Typography>
                                <Typography>Coupon Code: {coupons.CouponCode}</Typography>
                                <Typography>Offer Amount: {coupons.offerAmount}</Typography>
                                <Typography>Discount Percentage: {coupons.Discount}%</Typography>
                                <Typography>Offer Available: {coupons.OfferAvailable}</Typography>
                                <Typography>Expiry Date: {coupons.ExpiryDate}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                                <MdEdit
                                    sx={{ height: "30px", width: "30px", cursor: "pointer" }}
                                    onClick={() => handleEditCoupon(coupons.CouponId)}
                                />
                                <MdDelete
                                    sx={{ height: "30px", width: "30px", cursor: "pointer" }}
                                    onClick={() => handleDeleteCoupon(coupons.CouponId)}
                                />
                            </Box>
                        </Box>
                    ))
                ) : (
                    <Typography>No coupons available</Typography>
                )}
            </Box>
        </Box>
    );
};

export default Coupons;
