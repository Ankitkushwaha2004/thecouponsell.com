import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { yellow } from '@mui/material/colors';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'userid', label: 'UserID', minWidth: 100 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'pass',
    label: 'Password',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, userid, email, pass,status) {
  return { name, userid, email, pass, status };
}

const rows = [
  createData('Alice Johnson', 'user001', 'alice.johnson@example.com', 'pass1234', 'active'),
createData('Bob Smith', 'user002', 'bob.smith@example.com', 'securePass!', 'inactive'),
createData('Charlie Brown', 'user003', 'charlie.brown@example.com', '12345Abc', 'active'),
createData('Dana White', 'user004', 'dana.white@example.com', 'password!', 'inactive'),
createData('Emily Davis', 'user005', 'emily.davis@example.com', 'Welcome2024', 'active'),
createData('Frank Miller', 'user006', 'frank.miller@example.com', 'Franky#1', 'inactive'),
createData('Grace Kelly', 'user007', 'grace.kelly@example.com', 'GkPass22', 'active'),
createData('Henry Ford', 'user008', 'henry.ford@example.com', 'CarMaker2023', 'inactive'),
createData('Ivy Green', 'user009', 'ivy.green@example.com', 'GreenLeaf$', 'active'),
createData('Jake Turner', 'user010', 'jake.turner@example.com', 'TurnerRocks', 'active'),
createData('Kate Hudson', 'user011', 'kate.hudson@example.com', 'Hudson$20', 'inactive'),
createData('Liam Wilson', 'user012', 'liam.wilson@example.com', 'LWilson007', 'active'),
createData('Mia Allen', 'user013', 'mia.allen@example.com', 'Allen4Life', 'inactive'),
createData('Nathan Scott', 'user014', 'nathan.scott@example.com', 'NS#Secure', 'active'),
createData('Olivia Young', 'user015', 'olivia.young@example.com', 'Olivia@123', 'inactive'),
createData('Paul Harris', 'user016', 'paul.harris@example.com', 'PHarris*45', 'active'),
createData('Quinn Baker', 'user017', 'quinn.baker@example.com', 'Baker2024!', 'inactive'),
createData('Riley Moore', 'user018', 'riley.moore@example.com', 'MoorePass@', 'active'),
createData('Sophia Clark', 'user019', 'sophia.clark@example.com', 'SClark!23', 'active'),
createData('Tom Carter', 'user020', 'tom.carter@example.com', 'TomC@1234', 'inactive'),
createData('Uma Reed', 'user021', 'uma.reed@example.com', 'ReedPass9', 'active'),
createData('Victor Hill', 'user022', 'victor.hill@example.com', 'VH@Active99', 'inactive'),
createData('Wendy Hall', 'user023', 'wendy.hall@example.com', 'WHall*23', 'active'),
createData('Xander Lane', 'user024', 'xander.lane@example.com', 'XLane@45', 'inactive'),
createData('Yvonne Bell', 'user025', 'yvonne.bell@example.com', 'Bell!22Pass', 'active'),
createData('Zachary King', 'user026', 'zachary.king@example.com', 'KingZ123', 'inactive'),
createData('Amber Collins', 'user027', 'amber.collins@example.com', 'Collins@22', 'active'),
createData('Brian Howard', 'user028', 'brian.howard@example.com', 'BHoward!56', 'inactive'),
createData('Cathy Price', 'user029', 'cathy.price@example.com', 'Price&44', 'active'),
createData('Derek Stone', 'user030', 'derek.stone@example.com', 'StonePass99', 'active')

];

export default function UserTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 800 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}