import React from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Restaurant.css'

function Restaurant({restaurant}) {
    const { name, description, cuisine, location, openingTime, closingTime, phoneNumber, price } = restaurant;

    return (
      <Card sx={{ maxWidth: 345, backgroundColor: 'smokeWhite' }}>
        {/* <CardMedia
          component="img"
          alt={name}
          height="140"
          image=""
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h8" component="div">
            {name}
          </Typography>
          {/* <Typography variant="body1" color="text.secondary">
            {description}
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            Cuisine: {cuisine}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {openingTime} - {closingTime}
          </Typography> */}
          {/* <Typography variant="body2" color="text.secondary">
            {phoneNumber}
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/restaurants/${restaurant.id}}`}>
            <Button  size="small">Details</Button>
          </Link>
          {/* <Button size="small">Make Reservation</Button> */}
        </CardActions>
      </Card>
    );
    // return (
    //   <div className='restaurant'>
    //     <div className='restaurant__name'>
    //       {name}
    //     </div>
    //     <div className='restaurant__description'>
    //       {description}
    //     </div>
    //     <div className='restaurant__cuisine'>
    //       {cuisine}
    //     </div>
    //     <div className='restaurant__location'>
    //       {location}
    //     </div>
    //     <div className='restaurant__openingTime'>
    //       {openingTime} - {closingTime}
    //     </div>
    //     <div className='restaurant__phoneNumber'>
    //       {phoneNumber}
    //     </div>
    //     <div className='restaurant__price'>
    //       {price}
    //     </div>
    //   </div>
    // )
}

export default Restaurant;