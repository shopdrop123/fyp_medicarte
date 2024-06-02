import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';

import { Card, Stack, Button, MenuItem, Container, TextField, Typography } from '@mui/material';

import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export default function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchCategories();

    if (id !== 'new') {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`/products/${id}`);
          reset(response.data);
        } catch (error) {
          console.error('Failed to fetch product:', error);
        }
      };
      fetchProduct();
    }
  }, [id, reset]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (id === 'new') {
        await axios.post('/products/create', data);
      } else {
        await axios.put(`/products/update/${id}`, data);
      }
      navigate('/products');
    } catch (error) {
      console.error('Failed to save product:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">{id === 'new' ? 'New Product' : 'Edit Product'}</Typography>
      </Stack>

      <Card sx={{ p: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <Controller
              name="Title"
              control={control}
              render={({ field }) => <TextField {...field} label="Title" />}
            />
            <Controller
              name="Price"
              control={control}
              render={({ field }) => <TextField {...field} label="Price" type="number" />}
            />
            <Controller
              name="SalePrice"
              control={control}
              render={({ field }) => <TextField {...field} label="Sale Price" type="number" />}
            />
            <Controller
              name="ProductImage"
              control={control}
              render={({ field }) => <TextField {...field} label="Product Image URL" />}
            />
            <Controller
              name="Description"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Description" multiline rows={4} />
              )}
            />
            <Controller
              name="AvailableQty"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Available Quantity" type="number" />
              )}
            />
            <Controller
              name="MaxOrder"
              control={control}
              render={({ field }) => <TextField {...field} label="Max Order" type="number" />}
            />
            <Controller
              name="Brand"
              control={control}
              render={({ field }) => <TextField {...field} label="Brand" />}
            />
            <Controller
              name="category_id"
              control={control}
              render={({ field }) => (
                <TextField {...field} select label="Category">
                  {categories.map((category) => (
                    <MenuItem key={category.categoryId} value={category._id}>
                      {category.categoryName}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Stack>
          <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 3 }}>
            <Button variant="outlined" onClick={() => navigate('/product')}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit" disabled={loading}>
              Save
            </Button>
          </Stack>
        </form>
      </Card>
    </Container>
  );
}
