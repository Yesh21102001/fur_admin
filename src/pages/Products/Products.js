import React from "react";
import { Button, Box, Typography } from '@mui/material';
import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate();

    const handleAddProduct = () => {
        navigate("/addProducts");
    }

    const handleEditProduct = () => {
        navigate("/updateProducts")
    }

    return (
        <Box>
            <Box sx={{ padding: 2, display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                <Box>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", fontSize: { xs: '20px', sm: '25px' }, fontFamily: "Lexend, serif", color: "#493628" }}>
                        Products
                    </Typography>
                </Box>

                <Box>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddProduct}
                        sx={{
                            backgroundColor: "#493628",
                            width: { xs: '150px', sm: 'auto' },
                            color: "white",
                            fontWeight: "300",
                            fontFamily: "Lexend, serif",
                            '&:hover': {
                                backgroundColor: "#AB886D",
                            }
                        }}
                    >
                        Add Product
                    </Button>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {/* Category Cards */}
                {[...Array(3)].map((_, index) => (
                    <Box
                        key={index}
                        sx={{
                            height: "auto",
                            width: "380px",
                            backgroundColor: "#D6C0B3",
                            borderRadius: "10px",
                            display: "flex",
                            flexDirection: "column",  
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 2,
                            transition: "transform 0.3s, box-shadow 0.3s",
                            '&:hover': {
                                transform: "scale(1.05)",
                                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                            }
                        }}
                    >
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                            <img
                                src="https://img.freepik.com/free-photo/closeup-shot-dark-brown-leather-armchair_181624-22622.jpg?t=st=1733988245~exp=1733991845~hmac=81d4aff2c537e9622f0965342f06e6fd3b669a7b2682f3841fc1c5355bc12a31&w=360"
                                alt="Chair"
                                style={{
                                    height: "100px",
                                    width: "100px",
                                    marginTop: "8px",
                                    borderRadius: "5px"
                                }}
                            />
                            <img
                                src="https://img.freepik.com/free-photo/closeup-shot-dark-brown-leather-armchair_181624-22622.jpg?t=st=1733988245~exp=1733991845~hmac=81d4aff2c537e9622f0965342f06e6fd3b669a7b2682f3841fc1c5355bc12a31&w=360"
                                alt="Chair"
                                style={{
                                    height: "100px",
                                    width: "100px",
                                    marginTop: "8px",
                                    borderRadius: "5px"
                                }}
                            />
                            <img
                                src="https://img.freepik.com/free-photo/closeup-shot-dark-brown-leather-armchair_181624-22622.jpg?t=st=1733988245~exp=1733991845~hmac=81d4aff2c537e9622f0965342f06e6fd3b669a7b2682f3841fc1c5355bc12a31&w=360"
                                alt="Chair"
                                style={{
                                    height: "100px",
                                    width: "100px",
                                    marginTop: "8px",
                                    borderRadius: "5px"
                                }}
                            />
                        </Box>

                        
                        <Box sx={{ marginTop: 2, marginLeft: "-60px" }}>
                            <Typography variant="h6" sx={{ fontSize: "16px", fontFamily: "Lexend, serif" }}>Product ID:</Typography>
                            <Typography variant="h6" sx={{ fontSize: "16px", fontFamily: "Lexend, serif" }}>Product Name:</Typography>
                            <Typography variant="h6" sx={{ fontSize: "16px", fontFamily: "Lexend, serif" }}>Category:</Typography>
                            <Typography variant="h6" sx={{ fontSize: "16px", fontFamily: "Lexend, serif" }}>Description:</Typography>
                            <Typography variant="h6" sx={{ fontSize: "16px", fontFamily: "Lexend, serif" }}>Price:</Typography>
                            <Typography variant="h6" sx={{ fontSize: "16px", fontFamily: "Lexend, serif" }}>Stock Quantity:</Typography>
                            <Typography variant="h6" sx={{ fontSize: "16px", fontFamily: "Lexend, serif" }}>Color Options:</Typography>
                            <Typography variant="h6" sx={{ fontSize: "16px", fontFamily: "Lexend, serif" }}>Material:</Typography>
                            <Typography variant="h6" sx={{ fontSize: "16px", fontFamily: "Lexend, serif" }}>Dimensions (e.g., 10x10x10):</Typography>
                            <Typography variant="h6" sx={{ fontSize: "16px", fontFamily: "Lexend, serif" }}>Weight:</Typography>
                            <Typography variant="h6" sx={{ fontSize: "16px", fontFamily: "Lexend, serif" }}>Brand:</Typography>
                            <Typography variant="h6" sx={{ fontSize: "16px", fontFamily: "Lexend, serif" }}>Product Features:</Typography>
                            <Typography variant="h6" sx={{ fontSize: "16px", fontFamily: "Lexend, serif" }}>SKU:</Typography>
                        </Box>
                        <Box sx={{ marginLeft: "300px" }}>
                                <MdEdit sx={{ height: "30px", width: "30px" }} onClick={handleEditProduct} />
                                <MdDelete />
                            </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Products;
