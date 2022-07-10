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
    const { name, cuisine, location, price, id } = restaurant;

    return (
      <Card sx={{ maxWidth: 345, backgroundColor: 'smokeWhite', border: "1px solid grey", marginRight: "0" }}>
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
          <Typography variant="body2" color="text.secondary">
            Cuisine: {cuisine}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/restaurants/${id}}`}>
            <Button  size="small">Details</Button>
          </Link>
        </CardActions>
      </Card>
    );
}

export default Restaurant;