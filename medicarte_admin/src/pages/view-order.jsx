import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import {
  Card,
  Stack,
  Table,
  Paper,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Container,
  TableHead,
  Typography,
  TableContainer,
} from '@mui/material';

import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export default function ViewOrderPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/orders/${id}`);
        setOrder(response.data);
      } catch (error) {
        console.error('Failed to fetch order:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchOrder();
    }
  }, [id]);

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (!order) {
    return <Typography variant="h6">Order not found</Typography>;
  }

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">View Order</Typography>
        <Button variant="contained" onClick={() => navigate('/orders')}>
          Back to Orders
        </Button>
      </Stack>

      <Card sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Order ID: {order._id}
        </Typography>

        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.cart.map((item) => (
                <TableRow key={item._id}>
                  <TableCell component="th" scope="row">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    {item.name}
                  </TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right">{item.price * item.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
}
