import React, { useState, useEffect } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Category() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/categories/getCategories')
            .then((response) => {
                setCategories(response.data.data);
                setLoading(false);

                response.data.data.forEach(category => {
                    console.log('Category Image:', category.image);
                });
            })
            .catch((err) => {
                console.error('Error fetching categories:', err);
                setError('Failed to load categories');
                setLoading(false);
            });
    }, []);

    // Navigate to add category page
    const handleAddCategory = () => {
        navigate('/addcategory');
    };

    // Navigate to edit category page
    const handleEditCategory = (id) => {
        navigate(`/updatecategory/${id}`);
    };

    // Delete category from server
    const handleDeleteCategory = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/categories/${id}`);
            setCategories(categories.filter(category => category.id !== id)); // Update local state after deletion
        } catch (error) {
            console.error("Error deleting category:", error);
            alert("Failed to delete category");
        }
    };

    if (loading) {
        return <Typography variant="body1">Loading...</Typography>;
    }

    if (error) {
        return <Typography variant="body1" color="error">{error}</Typography>;
    }

    return (
        <Box sx={{ padding: 2 }}>
            <Box sx={{
                padding: 2,
                display: 'flex',
                justifyContent: "space-between",
                alignItems: 'center',
                flexDirection: { xs: 'column', sm: 'row' },
                textAlign: { xs: 'center', sm: 'left' },
                gap: 2
            }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", fontSize: { xs: '20px', sm: '25px' }, fontFamily: "Lexend, serif", color: "#493628" }}>
                    Categories
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddCategory}
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
                    Add Category
                </Button>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <Box
                            key={category.id}
                            sx={{
                                height: "200px",
                                width: "100%",
                                maxWidth: "300px",
                                backgroundColor: "#D6C0B3",
                                borderRadius: "10px",
                                padding: 2,
                                transition: "transform 0.3s, box-shadow 0.3s",
                                '&:hover': {
                                    transform: "scale(1.05)",
                                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                                }
                            }}
                        >
                            <Box>
                                {category.image ? (
                                    <img
                                        src={category.image} 
                                        alt={category.name}
                                        style={{
                                            height: "100px",
                                            width: "100px",
                                            marginTop: "8px",
                                            marginLeft: "8px",
                                            borderRadius: "5px",
                                            objectFit: "cover",
                                            fontFamily: "Lexend, serif"
                                        }}
                                    />
                                ) : (
                                    <Typography variant="body2" color="error" sx={{ padding: 1 }}>
                                        Image not available
                                    </Typography>
                                )}
                            </Box>
                            <Box sx={{ marginRight: "20px" }}>
                                <Typography variant="h4" sx={{ fontWeight: "500", marginTop: "10px", fontFamily: "Lexend, serif", fontSize: "25px" }}>
                                    {category.name}
                                </Typography>
                                <Box sx={{ marginTop: "60px", display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                                    <MdEdit
                                        style={{ cursor: 'pointer', height: '24px', width: '24px' }}
                                        onClick={() => handleEditCategory(category.id)}
                                    />
                                    <MdDelete
                                        style={{ cursor: 'pointer', height: '24px', width: '24px' }}
                                        onClick={() => handleDeleteCategory(category.id)}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    ))
                ) : (
                    <Typography variant="body1">No categories found.</Typography>
                )}
            </Box>
        </Box>
    );
}

export default Category;
