// import { useState } from 'react';

// import Stack from '@mui/material/Stack';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Unstable_Grid2';
// import Typography from '@mui/material/Typography';

// import { products } from 'src/_mock/products';

// import ProductCard from '../product-card';
// import ProductSort from '../product-sort';
// import ProductFilters from '../product-filters';

// // ----------------------------------------------------------------------

// // export default function ProductsView() {
// //   const [openFilter, setOpenFilter] = useState(false);

// //   const handleOpenFilter = () => {
// //     setOpenFilter(true);
// //   };

// //   const handleCloseFilter = () => {
// //     setOpenFilter(false);
// //   };

// //   return (
// //     <Container>
// //       <Typography variant="h4" sx={{ mb: 5 }}>
// //         Products
// //       </Typography>

// //       <Stack
// //         direction="row"
// //         alignItems="center"
// //         flexWrap="wrap-reverse"
// //         justifyContent="flex-end"
// //         sx={{ mb: 5 }}
// //       >
// //         <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
// //           <ProductFilters
// //             openFilter={openFilter}
// //             onOpenFilter={handleOpenFilter}
// //             onCloseFilter={handleCloseFilter}
// //           />

// //           <ProductSort />
// //         </Stack>
// //       </Stack>

// //       <Grid container spacing={3}>
// //         {products.map((product) => (
// //           <Grid key={product.id} xs={12} sm={6} md={3}>
// //             <ProductCard product={product} />
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Container>
// //   );
// // }

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import axios from 'src/utils/axios';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import TableNoData from '../table-no-data';
import TableEmptyRows from '../table-empty-rows';
import ProductTableRow from '../product-table-row';
import ProductTableHead from '../product-table-head';
import { emptyRows, applyFilter, getComparator } from '../utils';

// ----------------------------------------------------------------------

export default function ProductPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('ProductID');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = products.map((n) => n.ProductID);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, ProductID) => {
    const selectedIndex = selected.indexOf(ProductID);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, ProductID);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/products/delete/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  const dataFiltered = applyFilter({
    inputData: products,
    comparator: getComparator(order, orderBy),
  });

  const notFound = !dataFiltered.length;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Products</Typography>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={() => navigate('/products/edit/new')}
        >
          New Product
        </Button>
      </Stack>

      <Card>
        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <ProductTableHead
                order={order}
                orderBy={orderBy}
                rowCount={products.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'ProductID', label: 'Product ID' },
                  { id: 'Title', label: 'Title' },
                  { id: 'Price', label: 'Price' },
                  { id: '', label: 'Actions' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <ProductTableRow
                      key={row._id}
                      product={row}
                      selected={selected.indexOf(row.ProductID) !== -1}
                      handleClick={(event) => handleClick(event, row.ProductID)}
                      handleDelete={() => handleDelete(row._id)}
                      handleEdit={() => navigate(`/products/edit/${row._id}`)}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, products.length)}
                />

                {notFound && <TableNoData />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={products.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
