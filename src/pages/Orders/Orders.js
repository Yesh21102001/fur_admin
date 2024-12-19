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

const Orders = () => {
    const orders = [
        { id: 1, product: "Product A", quantity: 2, price: "$20", phoneNumber: "123-456-7890", address: "123 Main St, City A", status: "Delivered" },
        { id: 2, product: "Product B", quantity: 1, price: "$15", phoneNumber: "987-654-3210", address: "456 Elm St, City B", status: "In Progress" },
        { id: 3, product: "Product C", quantity: 3, price: "$30", phoneNumber: "555-555-5555", address: "789 Oak St, City C", status: "Cancelled" },
    ];

    return (
        <Box>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", fontSize: { xs: '20px', sm: '25px' }, fontFamily: "Lexend, serif", color: "#493628" }}>
                Orders
            </Typography>

            {orders.length === 0 ? (
                <Typography sx={{fontFamily: "Lexend, serif"}}>No orders available</Typography>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead sx={{backgroundColor: "#493628", color: "white"}}>
                            <TableRow >
                                <TableCell sx={{color: "white", fontFamily: "Lexend, serif",}}>Order ID</TableCell>
                                <TableCell sx={{color: "white", fontFamily: "Lexend, serif",}}>Product</TableCell>
                                <TableCell sx={{color: "white", fontFamily: "Lexend, serif",}}>Quantity</TableCell>
                                <TableCell sx={{color: "white", fontFamily: "Lexend, serif",}}>Price</TableCell>
                                <TableCell sx={{color: "white", fontFamily: "Lexend, serif",}}>Phone Number</TableCell>
                                <TableCell sx={{color: "white", fontFamily: "Lexend, serif",}}>Address</TableCell>
                                <TableCell sx={{color: "white", fontFamily: "Lexend, serif",}}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell scope="row" sx={{fontFamily: "Lexend, serif"}}>{order.id}</TableCell>
                                    <TableCell sx={{fontFamily: "Lexend, serif"}}>{order.product}</TableCell>
                                    <TableCell sx={{fontFamily: "Lexend, serif"}}>{order.quantity}</TableCell>
                                    <TableCell sx={{fontFamily: "Lexend, serif"}}>{order.price}</TableCell>
                                    <TableCell sx={{fontFamily: "Lexend, serif"}}>{order.phoneNumber}</TableCell>
                                    <TableCell sx={{fontFamily: "Lexend, serif"}}>{order.address}</TableCell>
                                    <TableCell sx={{fontFamily: "Lexend, serif"}}>{order.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Box>
    );
};

export default Orders;
