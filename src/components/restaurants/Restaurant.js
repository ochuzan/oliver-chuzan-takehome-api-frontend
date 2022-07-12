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
    const { name, cuisine, location, price, isPopular, id } = restaurant;

    let highlight;
    if (isPopular) {
      highlight = "7px solid red";
    } else {
      highlight =  "1px solid grey";
    }

    return (
      <Card sx={{ maxWidth: "auto", maxHeight: "fit-content", backgroundColor: 'MistyRose', border: highlight, marginRight: "0", justifyItems: "center" }}>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <CardContent sx={{padding: "8px"}}>
          <Typography gutterBottom variant="h8" >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cuisine} - {location} - {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Popular: {isPopular ? <span>Yes</span>: <span>No</span>}
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