import PropTypes from 'prop-types';

import { TableRow, TableCell, IconButton } from '@mui/material';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

UserTableRow.propTypes = {
  user: PropTypes.object.isRequired,

  handleClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default function UserTableRow({ user, selected, handleClick, handleDelete, handleEdit }) {
  const { firstname, lastname, email, role } = user;

  return (
    <TableRow hover>
      <TableCell>{`${firstname} ${lastname}`}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{role}</TableCell>
      <TableCell align="right">
        <IconButton onClick={handleEdit}>
          <Iconify icon="eva:edit-fill" />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <Iconify icon="eva:trash-2-outline" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
