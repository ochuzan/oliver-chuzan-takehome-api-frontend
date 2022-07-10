import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Button, Grid, Paper, TextField, Typography, MenuItem, Select } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

function ReservationUpdateForm() {
    const [ reservation, setReservation ] = useState({
      firstName: "",
      lastName: "",
      email: "",
      numGuests: 1,
      phoneNumber: "",
      time: ""
    });

    const url = process.env.REACT_APP_API_URL;
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
      axios.get(`${url}/api/reservations/${id}`)
        .then((res) => {
          setReservation(res.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [url, id]);

    const updateReservation = (updatedReservation) => {
      axios.patch(`${url}/api/reservations/${id}`, updatedReservation)
        .then((res) => {
          navigate(`/reservations/${id}`);
        }).catch((error) => {
          console.log(error);
        })
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

    const checkReservationBeforePatching = (reservation) => {
      for (let field in reservation) {
        if (reservation[field] === "" || field === "id" || field === "createdAt" || field === "restaurantId") {
          delete reservation[field];
        }
      }
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      checkReservationBeforePatching(reservation)
      updateReservation(reservation);
    };

    const numberOfGuests = [2, 3, 4, 5, 6, 7, 8, 9, 10]; 
    return (
      <Paper elevation={20} sx={{padding: "30px 20px", width: 400, margin: "20px auto"}}>
        <Grid align="center" sx={{marginBottom:"10px"}}>
          <Avatar sx={{backgroundColor: "#FE462D"}}>
            <EditIcon/>
          </Avatar>
          <Typography sx={{fontWeight: "600", color: "#FE462D"}} variant='h5'>Edit Reservation</Typography>
          <Typography variant="caption" >Please fill this form to edit your reservation</Typography>
          <div>
            <Typography variant="caption">Required fields are marked with an asterisk: *</Typography>
          </div>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField required onChange={handleTextChange} margin="dense" fullWidth value={reservation.firstName} id='firstName' label='First Name' placeholder="Enter your first name"/>
          <TextField required onChange={handleTextChange} margin="dense" fullWidth value={reservation.lastName} id='lastName' label='Last Name' placeholder="Enter your last name"/>
          <TextField onChange={handleTextChange} margin="dense" fullWidth value={reservation.email || ""} id='email' label='Email' placeholder="Enter your email address"/>
          <TextField required onChange={handleTextChange} margin="dense" fullWidth value={reservation.phoneNumber} id='phoneNumber' label='Phone Number' placeholder="Enter your phone number"/>
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
            // defaultValue="2022-06-01T12:00"
            // value={reservation.time}
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

export default ReservationUpdateForm