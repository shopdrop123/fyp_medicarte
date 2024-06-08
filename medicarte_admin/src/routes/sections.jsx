import PropTypes from 'prop-types';
import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes, useNavigate } from 'react-router-dom';

import EditUserPage from 'src/pages/edit-user';
import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
// export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const CategoryPage = lazy(() => import('src/pages/category'));
export const EditCategoryPage = lazy(() => import('src/pages/edit-category'));
export const ProductPage = lazy(() => import('src/pages/product'));
export const EditProductPage = lazy(() => import('src/pages/edit-product'));
export const LoginPage = lazy(() => import('src/pages/login'));
// export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

function PrivateRoute({ children }) {
  const token = localStorage.getItem('medicarte_admin_token');
  const navigate = useNavigate();
  console.log(token);
  if (!token) {
    navigate('/login');
  }
  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <PrivateRoute>
          <DashboardLayout>
            <Suspense>
              <Outlet />
            </Suspense>
          </DashboardLayout>
        </PrivateRoute>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'category', element: <CategoryPage /> },
        { path: 'products', element: <ProductPage /> },
        { path: 'orders', element: <OrdersPage /> },
        { path: 'user/edit/:id', element: <EditUserPage /> },
        { path: 'category/edit/:id', element: <EditCategoryPage /> },
        { path: 'products/edit/:id', element: <EditProductPage /> },
        { path: 'orders/:id', element: <ViewOrderPage /> },
       
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
