import React, { useState } from 'react';
import { TextField, Button, Avatar, Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AddCategory() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Save the file object instead of the object URL
    }
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();

    // Prepare FormData to send the file and name
    const formData = new FormData();
    formData.append('name', name);
    if (image) {
      formData.append('image', image); // Send the actual file
    }

    fetch('http://localhost:3000/api/categories/createCategory', {
      method: 'POST',
      body: formData,  // Use FormData in the body
    })
      .then(response => response.json())
      .then(newCategory => {
        console.log('Category created successfully', newCategory);
        alert('Category created successfully!');
        navigate('/category');  // Navigate after category creation
      })
      .catch(error => {
        console.error('Error creating Category:', error);
        alert('Error creating Category');
      });
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", fontSize: { xs: '20px', sm: '25px' }, fontFamily: "Lexend, serif", color: "#493628" }}>
        Add Category
      </Typography>

      <form onSubmit={handleAddSubmit}>  {/* Use form's onSubmit */}
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
                src={URL.createObjectURL(image)}  // Display the image using the local URL
                sx={{ width: 100, height: 100, marginTop: 2 }}
              />
            )}
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button variant="contained" type="submit" sx={{
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
}

export default AddCategory;
