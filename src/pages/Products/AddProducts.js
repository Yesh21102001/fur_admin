import React, { useState } from 'react';
import { TextField, Avatar, Grid, Button, Select, MenuItem, InputLabel, FormControl, FormHelperText, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);

    const [formData, setFormData] = useState({
        image: '',
        productName: '',
        productId: '',
        category: '',
        description: '',
        price: '',
        stockQuantity: '',
        colorOptions: '',
        material: '',
        dimensions: '',
        weight: '',
        brand: '',
        images: '',
        productFeatures: '',
        sku: '',
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {

        console.log(formData);
        navigate("/product");
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", fontSize: { xs: '20px', sm: '25px' }, fontFamily: "Lexend, serif", color: "#493628" }}>
                Add Product
            </Typography>

            <form>
                <Grid item xs={12}>
                    <Button variant="contained" component="label" sx={{
                        backgroundColor: "#493628",
                        width: { xs: '150px', sm: 'auto' },
                        color: "white",
                        fontWeight: "300",
                        fontFamily: "Lexend, serif",
                        '&:hover': {
                            backgroundColor: "#AB886D",
                        }
                    }}>
                        Upload Image
                        <input
                            type="file"
                            hidden
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </Button>

                    {image && (
                        <Avatar
                            alt="Category Image"
                            src={image}
                            sx={{ width: 100, height: 100, marginTop: 2 }}
                        />
                    )}
                </Grid>

                <br></br>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Product Name"
                            name="productName"
                            value={formData.productName}
                            onChange={handleChange}
                            fullWidth
                            required
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



                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth required>
                            <InputLabel>Category</InputLabel>
                            <Select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
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
                            >
                                <MenuItem value="Furniture">Furniture</MenuItem>
                                <MenuItem value="Chairs">Chairs</MenuItem>
                                {/* Add more categories as needed */}
                            </Select>
                            <FormHelperText>Choose a category</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            fullWidth
                            multiline
                            rows={4}
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

                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            fullWidth
                            required
                            type="number"
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

                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Stock Quantity"
                            name="stockQuantity"
                            value={formData.stockQuantity}
                            onChange={handleChange}
                            fullWidth
                            required
                            type="number"
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

                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Color Options"
                            name="colorOptions"
                            value={formData.colorOptions}
                            onChange={handleChange}
                            fullWidth
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

                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Material"
                            name="material"
                            value={formData.material}
                            onChange={handleChange}
                            fullWidth
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

                    <Grid item xs={4}>
                        <TextField
                            label="Dimensions (e.g., 10x10x10)"
                            name="dimensions"
                            value={formData.dimensions}
                            onChange={handleChange}
                            fullWidth
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

                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Weight"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            fullWidth
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

                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Brand"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                            fullWidth
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

                    <Grid item xs={4}>
                        <TextField
                            label="Product Features"
                            name="productFeatures"
                            value={formData.productFeatures}
                            onChange={handleChange}
                            fullWidth
                            multiline
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

                    <Grid item xs={4}>
                        <TextField
                            label="SKU"
                            name="sku"
                            value={formData.sku}
                            onChange={handleChange}
                            fullWidth
                            required
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

                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{
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
            </form>
        </Box>
    );
};

export default AddProducts;