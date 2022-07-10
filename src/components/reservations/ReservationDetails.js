import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link, useLocation } from 'react-router-dom';
import { Avatar, Button, Divider, Grid, Paper, Typography, Stack } from "@mui/material";
import EventNoteIcon from '@mui/icons-material/EventNote';

function ReservationDetails() {
    const [ reservation, setReservation ] = useState({});
    const [ restaurant, setRestaurant ] = useState({})

    const url = process.env.REACT_APP_API_URL;
    let { id } = useParams();
    if (id[id.length-1] === "}") {
      id = id.slice(0, -1);
    };

    const location = useLocation();

    useEffect(() => {
      axios.get(`${url}/api/reservations/${id}`)
        .then((res) => {
          setReservation(res.data);
        }).catch((error) => {
          console.log(error);
        });

      if (location.state?.restaurant) {
        setRestaurant(location.state?.restaurant);
      } else {
        axios.get(`${url}/api/restaurants/${reservation.restaurantId}`)
        .then(res => {
          setRestaurant(res.data)
        }).catch(error => {
          console.log(error);
        })
      }
    }, [url, id, reservation.restaurantId]);

    const navigate = useNavigate();

    const handleDelete = () => {
      axios.delete(`${url}/api/reservations/${id}`)
          .then((res) => {
              navigate("/reservations")
          }).catch((error) => {
              console.log(error);
          })
    };

    const {createdAt, firstName, lastName, email, numGuests, phoneNumber, time, restaurantId} = reservation;

    return (
      <Paper elevation={20} sx={{padding: "30px 20px", width: 400, margin: "20px auto"}}>
        <Grid align="center" sx={{marginBottom:"10px"}}>
          <Avatar sx={{backgroundColor: "#FE462D"}}>
            <EventNoteIcon/>
          </Avatar>
          <Typography sx={{fontWeight: "600", color: "#FE462D"}}variant='h5'>Reservation Details</Typography>
        </Grid>
        <Grid >
          <Typography>{firstName} {lastName}</Typography>
          <Typography className='reservation__email'>
            {email}
          </Typography>
          <Typography className='reservation__phoneNumber'>
            Phone Number: {phoneNumber}
          </Typography>
          <Typography className='reservation__restaurant'>
            Restaurant: {restaurant.name}
          </Typography>
          <Typography className='reservation__numGuests'>
            Number of Guests: {numGuests}
          </Typography>
          <Typography className='reservation__time'>
            Reservation Time: {time}
          </Typography>
        </Grid>
        <Stack
          className="button-nav"
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent="center"
          alignItems="center" spacing={2}
          sx={{marginTop: "10px"}}
      >
          <Link to={`/reservations`}>
              <Button variant="contained" color="primary">Back</Button>
          </Link>
          <Link to={`/reservations/${id}/edit`}>
              <Button variant="contained" color="success">
                  Edit
              </Button>
          </Link>
          <Button onClick={handleDelete} variant="contained" color="error">
              Delete
          </Button>
        </Stack>
      </Paper>
    )
}

export default ReservationDetails;