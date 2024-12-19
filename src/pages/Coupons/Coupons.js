import React, { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Coupons = () => {
    const navigate = useNavigate();
    const [coupons, setCoupons] = useState([]);

    // Fetch coupons data
    useEffect(() => {
        const fetchCoupons = async () => {
            try {
                const response = await fetch("/api/coupons"); // Replace with your API endpoint
                const data = await response.json();
                setCoupons(data);
            } catch (error) {
                console.error("Error fetching coupons:", error);
            }
        };
        fetchCoupons();
    }, []);

    const handleAddCoupon = () => {
        navigate("/addcoupon");
    };

    const handleEditCoupon = (id) => {
        navigate(`/updatecoupon/${id}`);
    };

    const handleDeleteCoupon = async (id) => {
        try {
            await fetch(`/api/coupons/${id}`, { method: "DELETE" }); // Adjust API endpoint as needed
            setCoupons((prev) => prev.filter((coupon) => coupon.id !== id));
        } catch (error) {
            console.error("Error deleting coupon:", error);
        }
    };

    return (
        <Box>
            {/* Header Section */}
            <Box
                sx={{
                    padding: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box>
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
                </Box>

                <Box>
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
            </Box>

            {/* Coupons Section */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {coupons.map((coupon) => (
                    <Box
                        key={coupon.id}
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
                        <Box>
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{
                                    fontWeight: "500",
                                    textAlign: "center",
                                    display: "flex",
                                    justifyContent: "center",
                                    fontFamily: "Lexend, serif",
                                }}
                            >
                                {coupon.name}
                            </Typography>
                            <Box>
                                <Typography sx={{ padding: "5px", fontFamily: "Lexend, serif" }}>ID: {coupon.id}</Typography>
                                <Typography sx={{ padding: "5px", fontFamily: "Lexend, serif" }}>Coupon Code: {coupon.code}</Typography>
                                <Typography sx={{ padding: "5px", fontFamily: "Lexend, serif" }}>Offer Amount: {coupon.offerAmount}</Typography>
                                <Typography sx={{ padding: "5px", fontFamily: "Lexend, serif" }}>Discount Percentage: {coupon.discount}%</Typography>
                                <Typography sx={{ padding: "5px", fontFamily: "Lexend, serif" }}>Offer Available: {coupon.available}</Typography>
                                <Typography sx={{ padding: "5px", fontFamily: "Lexend, serif" }}>Expiry Date: {coupon.expiryDate}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                                <MdEdit
                                    sx={{ height: "30px", width: "30px", cursor: "pointer" }}
                                    onClick={() => handleEditCoupon(coupon.id)}
                                />
                                <MdDelete
                                    sx={{ height: "30px", width: "30px", cursor: "pointer" }}
                                    onClick={() => handleDeleteCoupon(coupon.id)}
                                />
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Coupons;