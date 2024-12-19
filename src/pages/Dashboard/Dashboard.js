import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardContent, MenuItem, Select, Breadcrumbs } from "@mui/material";
import doctor from "../../assets/icons/wooden-chair.png";
import lab from "../../assets/icons/round-table.png";
import medicines from "../../assets/icons/seater-sofa.png";
import receptionist from "../../assets/icons/wardrobe.png";
import appointment from "../../assets/icons/products.png";
import order from "../../assets/icons/order.png";
import payments from "../../assets/icons/debit-card.png";
import cat from "../../assets/icons/application.png"
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import MedicalAnalysisChart from "./MedicalAnalysisChart";
import { Link } from "react-router-dom";
import MedicalAnalysisPieChart from "./MedicalAnalysisPieChart";

const Dashboard = () => {
    const [selectedCity, setSelectedCity] = useState('');

    const handleChange = (event) => {
        setSelectedCity(event.target.value);
    };
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box>
            <Grid style={{
                backgroundColor: "#ffffff", height: "60px", display: "flex", width: "100%",
                flexDirection: "row", justifyContent: "space-between", alignItems: "center",
            }} >
                <Grid style={{
                    display: "flex", flexDirection: "column", justifyContent: "flex"
                }} >
                    <Typography variant="h5" style={{
                        fontFamily: "Lexend, serif", fontSize: "22px", fontWeight: 600,
                        padding: "0 0 0 10px", color: "#493628"
                    }}>Dashboard</Typography>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: "10px" }} style={{ display: "flex", justifyItems: "flex-start", flexWrap: "wrap" }}>
                {/* First Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{transition: "transform 0.3s, box-shadow 0.3s",
                            '&:hover': {
                                transform: "scale(1.05)",
                                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                            }}}>
                        <CardContent style={{ display: "flex", alignItems: "center", background: "linear-gradient(to right, #D6C0B3, #493628)", width: "100%" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img
                                    src={doctor}
                                    alt="Doctor Icon"
                                    style={{ width: "100px", height: "auto", marginRight: "5px" }}
                                />
                                <div style={{ padding: "auto" }}>
                                    <Typography variant={isSmallScreen ? "h6" : "subtitle1"} textAlign={"left"} sx={{fontFamily: "Lexend, serif"}}>Chairs</Typography>
                                    <Typography variant={isSmallScreen ? "h4" : "h5"} textAlign={"left"} sx={{fontFamily: "Lexend, serif"}}>3000</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Second Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{transition: "transform 0.3s, box-shadow 0.3s",
                            '&:hover': {
                                transform: "scale(1.05)",
                                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                            }}}>
                        <CardContent style={{ display: "flex", alignItems: "center", background: "linear-gradient(to right, #D6C0B3, #493628)", width: "100%" }}>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img
                                    src={medicines}
                                    alt="Medicines Icon"
                                    style={{ width: "100px", height: "auto", marginRight: "5px" }}
                                />
                                <div style={{ padding: "auto" }}>
                                    <Typography variant={isSmallScreen ? "h6" : "subtitle1"} textAlign={"left"} sx={{fontFamily: "Lexend, serif"}}>Sofa</Typography>
                                    <Typography variant={isSmallScreen ? "h4" : "h5"} textAlign={"left"} sx={{fontFamily: "Lexend, serif"}}>1200</Typography></div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Third Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{transition: "transform 0.3s, box-shadow 0.3s",
                            '&:hover': {
                                transform: "scale(1.05)",
                                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                            }}}>
                        <CardContent style={{ display: "flex", alignItems: "center", background: "linear-gradient(to right, #D6C0B3, #493628)", width: "100%" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img
                                    src={lab}
                                    alt="Lab Icon"
                                    style={{ width: "100px", height: "auto", marginRight: "5px" }}
                                />
                                <div style={{ padding: "auto" }}>
                                    <Typography variant={isSmallScreen ? "h6" : "subtitle1"} textAlign={"center"} sx={{fontFamily: "Lexend, serif"}}>Tables</Typography>
                                    <Typography variant={isSmallScreen ? "h4" : "h5"} sx={{fontFamily: "Lexend, serif"}}>2500</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Fourth Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{transition: "transform 0.3s, box-shadow 0.3s",
                            '&:hover': {
                                transform: "scale(1.05)",
                                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                            }}}>
                        <CardContent style={{ display: "flex", alignItems: "center", background: "linear-gradient(to right, #D6C0B3, #493628)", width: "100%" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img
                                    src={receptionist}
                                    alt="Receptionist Icon"
                                    style={{ width: "100px", height: "auto", marginRight: "5px" }}
                                />
                                <div style={{ padding: "auto" }}>
                                    <Typography variant={isSmallScreen ? "h6" : "subtitle1"} textAlign={"center"} sx={{fontFamily: "Lexend, serif"}}>Cupboard</Typography>
                                    <Typography variant={isSmallScreen ? "h4" : "h5"} sx={{fontFamily: "Lexend, serif"}}>1500</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: "10px" }}>
                {/* First Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{transition: "transform 0.3s, box-shadow 0.3s",
                            '&:hover': {
                                transform: "scale(1.05)",
                                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                            }}}>
                        <CardContent style={{
                            display: "flex",
                            alignItems: "center",
                            background: "linear-gradient(to right, #D6C0B3, #493628)", width: "100%",
                        }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={appointment}
                                    alt="Appointment Icon"
                                    style={{ width: "100px", height: "auto", marginRight: "5px" }} />
                                <div>
                                    <Typography variant={isSmallScreen ? "h6" : "subtitle1"} sx={{fontFamily: "Lexend, serif"}}>Total Products</Typography>
                                    <Typography variant="subtitle1" sx={{fontFamily: "Lexend, serif"}}>5500</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Second Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{transition: "transform 0.3s, box-shadow 0.3s",
                            '&:hover': {
                                transform: "scale(1.05)",
                                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                            }}}>
                        <CardContent style={{ display: "flex", alignItems: "center", background: "linear-gradient(to right, #D6C0B3, #493628)", width: "100%" }}>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={order}
                                    alt="Appointment Icon"
                                    style={{ width: "100px", height: "auto", marginRight: "5px" }} />
                                <div>
                                    <Typography variant={isSmallScreen ? "h6" : "subtitle1"} sx={{fontFamily: "Lexend, serif"}}>Total Orders</Typography>
                                    <Typography variant="subtitle1" sx={{fontFamily: "Lexend, serif"}}>5500</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Third Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{transition: "transform 0.3s, box-shadow 0.3s",
                            '&:hover': {
                                transform: "scale(1.05)",
                                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                            }}}>
                        <CardContent style={{ display: "flex", alignItems: "center", background: "linear-gradient(to right, #D6C0B3, #493628)", width: "100%" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={payments}
                                    alt="Appointment Icon"
                                    style={{ width: "100px", height: "auto", marginRight: "5px" }} />
                                <div>
                                    <Typography variant={isSmallScreen ? "h6" : "subtitle1"} sx={{fontFamily: "Lexend, serif"}}>Total Payments</Typography>
                                    <Typography variant="subtitle1" sx={{fontFamily: "Lexend, serif"}}>7500</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Fourth Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{transition: "transform 0.3s, box-shadow 0.3s",
                            '&:hover': {
                                transform: "scale(1.05)",
                                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                            }}}>
                        <CardContent style={{ display: "flex", alignItems: "center", background: "linear-gradient(to right, #D6C0B3, #493628)", width: "100%" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={cat}
                                    alt="Appointment Icon"
                                    style={{ width: "100px", height: "auto", marginRight: "5px" }} />
                                <div>
                                    <Typography variant={isSmallScreen ? "h6" : "subtitle1"} sx={{fontFamily: "Lexend, serif"}}>Total Categories</Typography>
                                    <Typography variant="subtitle1" sx={{fontFamily: "Lexend, serif"}}>6000</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Box >
            <Grid container sx={{ margin: "50px 0px 0px 0px", backgroundColor: "#fcfcfc", borderRadius: "6px", display: "flex", flexDirection: "column", width: "48%"}}>
                <Typography variant="h5" style={{
                    fontFamily: "Lexend, serif", fontSize: "22px", fontWeight: 600,
                    padding: "15px 0 15px 10px", color: "#493628"
                }}> Users Analysis </Typography>
                <MedicalAnalysisChart />
            </Grid>

            <Grid container sx={{ margin: "50px 0px 0px 0px", backgroundColor: "#fcfcfc", borderRadius: "6px", display: "flex", flexDirection: "column", }}>
                <Typography variant="h5" style={{
                    fontFamily: "Lexend, serif", fontSize: "22px", fontWeight: 600,
                    padding: "15px 0 15px 10px", color: "#493628"
                }}> Pie Chart </Typography>
                <MedicalAnalysisPieChart />
            </Grid>

            </Box>

        </Box>
    );
};

export default Dashboard;