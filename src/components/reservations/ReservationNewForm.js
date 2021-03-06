import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as React from "react";
import { Avatar, Button, Grid, Paper, TextField, Typography, MenuItem } from "@mui/material";
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';

function ReservationNewForm({restaurantName}) {
    let { id } = useParams();
    id = id.slice(0, -1);
    
    const [ reservation, setReservation ] = useState({
      firstName: "",
      lastName: "",
      // email: "",
      numGuests: 1,
      phoneNumber: "",
      time: "",
      restaurantId: id
    });

    const url = process.env.REACT_APP_API_URL;
    let navigate = useNavigate();

    const addReservation = (newReservation) => {
      axios.post(`${url}/api/reservations`, newReservation)
        .then((res) => {
          navigate("/reservations");
        }).catch((error) => {
          console.log(error);
        });
    };

    const handleTextChange = (event) => {
      setReservation({ ...reservation, [event.target.id]: event.target.value });
    };
    
    const handleGuests = (event) => {
      setReservation({ ...reservation, numGuests: event.target.value });
    };

    const disableButton = () => {
      const { firstName, lastName, phoneNumber, numGuests, time } = reservation;

      if(firstName && lastName && phoneNumber && numGuests && time){
          return false;
      } else {
          return true;
      }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addReservation(reservation);
    };

    const numberOfGuests = [2, 3, 4, 5, 6, 7, 8, 9, 10]; 
    return (
      <Paper elevation={20} sx={{padding: "30px 20px", width: 400}}>
          <Grid align="center" sx={{marginBottom:"10px"}}>
            <Avatar sx={{backgroundColor: "#FE462D"}}>
              <TableRestaurantIcon/>
            </Avatar>
            <Typography sx={{fontWeight: "600", color: "#FE462D"}}variant='h5'>Make a Reservation</Typography>
            <Typography variant="caption" >Please fill this form to make a reservation at {restaurantName}</Typography>
            <div>
              <Typography variant="caption">Required fields are marked with an asterisk: *</Typography>
            </div>
          </Grid>
          <form onSubmit={handleSubmit}>
            <TextField required onChange={handleTextChange} margin="dense" fullWidth id='firstName' label='First Name' placeholder="Enter your first name"/>
            <TextField required onChange={handleTextChange} margin="dense" fullWidth id='lastName' label='Last Name' placeholder="Enter your last name"/>
            <TextField onChange={handleTextChange} margin="dense" fullWidth id='email' label='Email' placeholder="Enter your email address"/>
            <TextField required onChange={handleTextChange} margin="dense" fullWidth id='phoneNumber' label='Phone Number' placeholder="Enter your phone number"/>
            <TextField required onChange={handleGuests} margin="dense" fullWidth id='numGuests' label='Number of Guests' placeholder="Enter number of guests" select value={reservation.numGuests}>
              <MenuItem id='numGuests' value={1}>1 Guest</MenuItem>
              {numberOfGuests.map((number) => {
                  return <MenuItem key={number} id='numGuests' value={number}>{number} Guests</MenuItem>
              })}
            </TextField>
            <TextField
              required
              onChange={handleTextChange}
              margin="dense"
              fullWidth
              id="time"
              label="Reservation Time"
              type="datetime-local"
              // defaultValue="2022-07-11T12:00"
              // sx={{ width: 250 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button type="submit" variant="contained" size="large" color="primary" fullWidth disabled={disableButton()}>Reserve Now</Button>
          </form>
      </Paper>
    )
}

export default ReservationNewForm