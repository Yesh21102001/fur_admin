import React, { useState, useEffect } from 'react';
import { TextField, Button, Avatar, Box, Grid, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateCategory() {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch category data based on ID
  useEffect(() => {
    axios.get(`http://localhost:3000/api/categories/getCategoryById/${id}`)
      .then((response) => {
        const category = response.data;
        setName(category.name);
        setImage(category.image); // Set existing image path
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching category:", err);
        setError("Failed to load category data");
        setLoading(false);
      });
  }, [id]);

  // Handle image change (when user selects a new image)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Store the file, not the object URL
    }
  };

  // Handle form submission to update category
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);

      // Append image if it is updated
      if (image && typeof image !== 'string') {
        formData.append('image', image); 
      }

      await axios.put(`http://localhost:3000/api/categories/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      navigate('/category'); 
    } catch (error) {
      console.error("Error updating category:", error);
      alert("Failed to update category");
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
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", fontSize: { xs: '20px', sm: '25px' }, fontFamily: "Lexend, serif", color: "#493628" }}>
        Update Category
      </Typography>

      <Grid container spacing={2} sx={{ marginTop: "50px" }}>
        {/* Category Name Field */}
        <Grid item xs={4}>
          <TextField
            label="Category Name"
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

        {/* Category Image Field */}
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
              src={typeof image === 'string' ? image : URL.createObjectURL(image)}
              sx={{ width: 100, height: 100, marginTop: 2 }}
            />
          )}
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

export default UpdateCategory;