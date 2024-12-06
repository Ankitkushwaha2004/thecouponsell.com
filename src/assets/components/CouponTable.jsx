import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'company_name', label: 'Company_name', minWidth: 170 },
  { id: 'discount', label: 'Discount', minWidth: 100 },
  {
    id: 'sellerID',
    label: 'SellerID',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'price',
    label: 'Price',
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

function createData(company_name, discount, sellerID, price,status) {
  return { company_name, discount, sellerID, price, status };
}

const rows = [
    createData('TechWorld Inc', '15%', 'seller001', '$200', 'Active'),
createData('GreenMart', '20%', 'seller002', '$120', 'Inactive'),
createData('FreshFoods', '10%', 'seller003', '$85', 'Pending'),
createData('StyleCraft', '25%', 'seller004', '$150', 'Active'),
createData('AutoHub', '30%', 'seller005', '$300', 'Inactive'),
createData('BookBazaar', '5%', 'seller006', '$40', 'Active'),
createData('FitGear', '18%', 'seller007', '$220', 'Pending'),
createData('DecorVilla', '12%', 'seller008', '$180', 'Active'),
createData('SmartSolutions', '22%', 'seller009', '$400', 'Inactive'),
createData('UrbanThreads', '8%', 'seller010', '$60', 'Active'),
createData('EcoLife', '35%', 'seller011', '$95', 'Pending'),
createData('PetParadise', '15%', 'seller012', '$50', 'Inactive'),
createData('TechGurus', '28%', 'seller013', '$250', 'Active'),
createData('GlitzStore', '7%', 'seller014', '$110', 'Active'),
createData('BargainBase', '33%', 'seller015', '$75', 'Inactive'),
createData('ChefWorks', '20%', 'seller016', '$190', 'Pending'),
createData('HappyHomes', '14%', 'seller017', '$210', 'Active'),
createData('TravelEase', '12%', 'seller018', '$380', 'Inactive'),
createData('BrightKids', '10%', 'seller019', '$55', 'Pending'),
createData('OfficeDepot', '25%', 'seller020', '$500', 'Active'),
createData('GadgetGalaxy', '30%', 'seller021', '$320', 'Inactive'),
createData('QuickFix', '5%', 'seller022', '$70', 'Active'),
createData('PrimeCare', '18%', 'seller023', '$270', 'Pending'),
createData('NatureHub', '12%', 'seller024', '$130', 'Active'),
createData('MotoMart', '22%', 'seller025', '$350', 'Inactive'),
createData('GameCorner', '8%', 'seller026', '$60', 'Pending'),
createData('GlamourStore', '35%', 'seller027', '$200', 'Active'),
createData('TechNest', '15%', 'seller028', '$150', 'Inactive'),
createData('FitWorld', '28%', 'seller029', '$260', 'Pending'),
createData('LuxorDecor', '7%', 'seller030', '$180', 'Active')


];

export default function CouponTable() {
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
          <TableHead >
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