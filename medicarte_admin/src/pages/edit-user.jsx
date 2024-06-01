import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';

import { Card, Stack, Button, Container, TextField, Typography } from '@mui/material';

import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export default function EditUserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id !== 'new') {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`/users/${id}`);
          reset(response.data);
        } catch (error) {
          console.error('Failed to fetch user:', error);
        }
      };
      fetchUser();
    }
  }, [id, reset]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formdate = {
        ...data,
        role: 'user',
      };

      if (id === 'new') {
        await axios.post('/users/create', formdate);
      } else {
        await axios.put(`/users/update/${id}`, formdate);
      }
      navigate('/user');
    } catch (error) {
      console.error('Failed to save user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">{id === 'new' ? 'New User' : 'Edit User'}</Typography>
      </Stack>

      <Card sx={{ p: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <Controller
              name="firstname"
              control={control}
              render={({ field }) => <TextField {...field} label="First Name" />}
            />
            <Controller
              name="lastname"
              control={control}
              render={({ field }) => <TextField {...field} label="Last Name" />}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => <TextField {...field} label="Email" />}
            />

            <Controller
              name="profileimage"
              control={control}
              render={({ field }) => <TextField {...field} label="Profile Image URL" />}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => <TextField {...field} label="Password" type="password" />}
            />
          </Stack>
          <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 3 }}>
            <Button variant="outlined" onClick={() => navigate('/user')}>
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
