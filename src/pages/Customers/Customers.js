import React from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';

const Customers = () => {
    const orders = [
        { id: 1, customerName: "Sandeep", email: "sandeep@gmail.com", phoneNumber: "123-456-7890" },
        { id: 2, customerName: "Rakesh", email: "rakesh@gmail.com", phoneNumber: "987-654-3210" },
        { id: 3, customerName: "Srinu", email: "srinu@gmail.com", phoneNumber: "555-555-5555" },
    ];

    return (
        <Box>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", fontSize: { xs: '20px', sm: '25px' }, fontFamily: "Lexend, serif", color: "#493628" }}>
                Customers
            </Typography>

            {orders.length === 0 ? (
                <Typography sx={{fontFamily: "Lexend, serif"}}>No orders available</Typography>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead sx={{backgroundColor: "#493628", color: "white"}}>
                            <TableRow >
                                <TableCell sx={{ color: "white", fontFamily: "Lexend, serif" }}>Order ID</TableCell>
                                <TableCell sx={{ color: "white", fontFamily: "Lexend, serif" }}>Customer Name</TableCell>
                                <TableCell sx={{ color: "white", fontFamily: "Lexend, serif" }}>Email</TableCell>
                                <TableCell sx={{ color: "white", fontFamily: "Lexend, serif" }}>Phone Number</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell scope="row" sx={{fontFamily: "Lexend, serif"}}>{order.id}</TableCell>
                                    <TableCell sx={{fontFamily: "Lexend, serif"}}>{order.customerName}</TableCell>
                                    <TableCell sx={{fontFamily: "Lexend, serif"}}>{order.email}</TableCell>
                                    <TableCell sx={{fontFamily: "Lexend, serif"}}>{order.phoneNumber}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Box>
    );
};

export default Customers;
