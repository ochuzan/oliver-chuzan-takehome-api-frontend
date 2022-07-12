import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';
import ReservationNewForm from '../reservations/ReservationNewForm';
import { Avatar, Button, Divider, Grid, Paper, Typography, Stack } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import './RestaurantDetails.css'

function RestaurantDetails() {
    const [ restaurant, setRestaurant ] = useState({});

    const url = process.env.REACT_APP_API_URL;
    let { id } = useParams();
    if (id[id.length-1] === "}") {
      id = id.slice(0, -1);
    };

    let navigate = useNavigate();

    useEffect(() => {
      axios.get(`${url}/api/restaurants/${id}`)
        .then((res) => {
          setRestaurant(res.data);
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

    const { name, description, cuisine, location, openingTime, closingTime, phoneNumber, price } = restaurant;

    return (
      <div className='restaurant'>
        <Paper elevation={20} sx={{padding: "30px 20px", width: 400}}>
            <Grid align="center" sx={{marginBottom:"10px"}}>
              <Avatar sx={{backgroundColor: "#FE462D"}}>
                <RestaurantIcon/>
              </Avatar>
              <Typography sx={{fontWeight: "600", color: "#FE462D"}} variant='h5'>Restaurant Details</Typography>
            </Grid>
            <Grid >
              <Typography>{name}</Typography>
              <Typography className='reservation__email'>
                {description}
              </Typography>
              <Typography className='reservation__phoneNumber'>
                {cuisine}
              </Typography>
              <Typography className='reservation__restaurant'>
                {location}
              </Typography>
              <Typography className='reservation__numGuests'>
                {openingTime} - {closingTime}
              </Typography>
              <Typography className='reservation__time'>
                {phoneNumber}
              </Typography>
              <Typography className='reservation__time'>
                {price}
              </Typography>
            </Grid>
            <Stack
              className="button-nav"
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              justifyContent="center"
              alignItems="center" spacing={2}
              sx={{marginTop: "280px"}}
          >
              <Link to={'/'}>
                  <Button variant="contained" color="primary">Back</Button>
              </Link>
              <Link to={`/restaurants/${id}/edit`}>
                  <Button variant="contained" color="success">
                      Edit
                  </Button>
              </Link>
              <Button onClick={handleDelete} variant="contained" color="error">
                  Delete
              </Button>
          </Stack>
        </Paper>
        <ReservationNewForm restaurantName={name}/>
      </div>
    )
}

export default RestaurantDetails;