import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';

import { Card, Stack, Button, Container, TextField, Typography } from '@mui/material';

import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export default function EditCategoryPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id !== 'new') {
      const fetchCategory = async () => {
        try {
          const response = await axios.get(`/categories/${id}`);
          reset(response.data);
        } catch (error) {
          console.error('Failed to fetch category:', error);
        }
      };
      fetchCategory();
    }
  }, [id, reset]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (id === 'new') {
        await axios.post('/categories/create', data);
      } else {
        await axios.put(`/categories/update/${id}`, data);
      }
      navigate('/category');
    } catch (error) {
      console.error('Failed to save category:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">{id === 'new' ? 'New Category' : 'Edit Category'}</Typography>
      </Stack>

      <Card sx={{ p: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <Controller
              name="categoryName"
              control={control}
              render={({ field }) => <TextField {...field} label="Category Name" />}
            />
          </Stack>
          <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 3 }}>
            <Button variant="outlined" onClick={() => navigate('/category')}>
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
