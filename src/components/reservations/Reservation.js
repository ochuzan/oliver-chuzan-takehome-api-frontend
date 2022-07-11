import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Reservation({reservation}) {
    const [ restaurant, setRestaurant ] = useState({});

    const {firstName, lastName, time, restaurantId, id} = reservation;
    const {name} = restaurant;

    const url = process.env.REACT_APP_API_URL;

    useEffect(() => {
      axios.get(`${url}/api/restaurants/${restaurantId}`)
        .then(res => {
          setRestaurant(res.data)
        }).catch(error => {
          console.log(error);
        })
    }, [])

    return (
      <Card sx={{ maxWidth: 345, backgroundColor: 'MistyRose', border: "1px solid grey" }}>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image="https://images.unsplash.com/photo-1576707769315-01a7474de445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <CardContent>
          <Typography gutterBottom variant="h8" component="div">
            {firstName} {lastName}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Reservation Time: {time}
          </Typography>
        </CardContent>
        <CardActions sx={{padding: "0px 10px"}}>
          <Link to={`/reservations/${id}}`} state={{restaurant: restaurant}}>
            <Button  size="small">Reservation Details</Button>
          </Link>
        </CardActions>
      </Card>
    )
}

export default Reservation;