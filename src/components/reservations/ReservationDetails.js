import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { Avatar, Button, Checkbox, FormControl, FormControlLabel, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid, Paper, TextField, Typography, Stack, MenuItem, Select } from "@mui/material";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

function ReservationDetails() {
    const [ reservation, setReservation ] = useState({});

    const url = process.env.REACT_APP_API_URL;
    let { id } = useParams();
    id = id.slice(0, -1)
    let navigate = useNavigate();

    useEffect(() => {
      axios.get(`${url}/api/reservations/${id}`)
        .then((res) => {
          setReservation(res.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [url, id]);

    const handleDelete = () => {
      axios.delete(`${url}/api/restaurants/${id}`)
          .then((res) => {
              navigate("/restaurants")
          }).catch((error) => {
              console.log(error);
          })
    };

    const {createdAt, firstName, lastName, email, numGuests, phoneNumber, time, restaurantId} = reservation;

    const headerStyle = {margin: "0", color: "#FE462D"};
    return (
      // <div className='reservation'>
      //     <div className='reservation__name'>
      //       Guest Name: {firstName} {lastName}
      //     </div>
      //     <div className='reservation__email'>
      //       {email}
      //     </div>
      //     <div className='reservation__phoneNumber'>
      //       {phoneNumber}
      //     </div>
      //     <div className='reservation__restaurant'>
      //       Restaurant: {restaurantId}
      //     </div>
      //     <div className='reservation__numGuests'>
      //       Number of Guests: {numGuests}
      //     </div>
      //     <div className='reservation__time'>
      //       Reservation Time: {time}
      //     </div>
      // </div>
      <Paper elevation={20} sx={{padding: "30px 20px", width: 400, margin: "20px auto"}}>
      <Grid align="center" sx={{marginBottom:"10px"}}>
        <Avatar sx={{backgroundColor: "#FE462D"}}>
          <PersonAddAltOutlinedIcon/>
        </Avatar>
          <h2 style={headerStyle}>Reservation Details</h2>
      </Grid>
      {/* <form> */}
        <Typography>{firstName} {lastName}</Typography>
        <Typography className='reservation__email'>
        {email}
       </Typography>
       <Typography className='reservation__phoneNumber'>
         {phoneNumber}
       </Typography>
       <Typography className='reservation__restaurant'>
         Restaurant: {restaurantId}
       </Typography>
       <Typography className='reservation__numGuests'>
         Number of Guests: {numGuests}
       </Typography>
       <Typography className='reservation__time'>
         Reservation Time: {time}
       </Typography>
        {/* <Typography required margin="dense" fullWidth id='lastName' label='Last Name' placeholder="Enter your last name"></Typography>
        <Typography margin="dense" fullWidth id='email' label='Email' placeholder="Enter your email address"/></Typography>
        <Typography required margin="dense" fullWidth id='phoneNumber' label='Phone Number' placeholder="Enter your phone number"></Typography>
        <Typography required  margin="dense" fullWidth id='numGuests' label='Number of Guests' placeholder="Enter number of guests" select value={reservation.numGuests}></Typography> */}
        {/* </TextField>
        <TextField
          required
        
          margin="dense"
          fullWidth
          id="time"
          label="Reservation Time"
          type="datetime-local"
          defaultValue="2022-06-01T12:00"
          // sx={{ width: 250 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form> */}
  </Paper>
    )
}

export default ReservationDetails;