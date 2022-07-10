import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Grid, Paper, TextField, Typography, MenuItem, Select } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';

function RestaurantNewForm() {
    const [ restaurant, setRestaurant ] = useState({
      name: "",
      description: "",
      phoneNumber: "",
      openingTime: "",
      closingTime: "",
      price: "",
      cuisine: "",
      location: ""
    });

    const url = process.env.REACT_APP_API_URL;
    let navigate = useNavigate();

    const addRestaurant = (newRestaurant) => {
      axios.post(`${url}/api/restaurants`, newRestaurant)
        .then((res) => {
          navigate("/restaurants");
        }).catch((error) => {
          console.log(error);
        });
    };

    const handleTextChange = (event) => {
      setRestaurant({ ...restaurant, [event.target.id]: event.target.value });
    };

    const handlePriceSelect = (event) => {
        setRestaurant({ ...restaurant, price: event.target.value });
    };

    const disableButton = () => {
      const { name, description, openingTime, closingTime, price, cuisine, location } = restaurant;

      if(name && description && cuisine && location && openingTime && closingTime && price){
          return false;
      } else {
          return true;
      }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addRestaurant(restaurant);
    };

    const priceSelect = ["$", "$$", "$$$", "$$$$"];
    return (
        <Paper elevation={20} sx={{padding: "30px 20px", width: 400, margin: "20px auto"}}>
            <Grid align="center" sx={{marginBottom:"10px"}}>
                <Avatar sx={{backgroundColor: "#FE462D"}}>
                    <RestaurantIcon/>
                </Avatar>
                    <Typography sx={{fontWeight: "600", color: "#FE462D"}} variant='h5'>Add a New Restaurant</Typography>
                    <Typography variant="caption" >Please fill this form to add a restaurant</Typography>
                <div>
                    <Typography variant="caption">Required fields are marked with an asterisk: *</Typography>
                </div>
            </Grid>
            <form onSubmit={handleSubmit}>
                <TextField required onChange={handleTextChange} margin="dense" fullWidth id='name' label='Resaurant Name' placeholder="Enter your restaurant name"/>
                <TextField required onChange={handleTextChange} margin="dense" fullWidth id='description' label='Description' placeholder="Enter restaurant description" multiline maxRows={5}/>
                <TextField required onChange={handleTextChange} margin="dense" fullWidth id='cuisine' label='Cuisine' placeholder="Enter restaurant cuisine"/>
                <TextField required onChange={handleTextChange} margin="dense" fullWidth id='location' label='Location' placeholder="Enter restaurant location"/>
                <TextField required onChange={handleTextChange} margin="dense" fullWidth id='openingTime' label='Opening Time' placeholder="Enter restaurant opening time"/>
                <TextField required onChange={handleTextChange} margin="dense" fullWidth id='closingTime' label='Closing Time' placeholder="Enter restaurant closing time"/>
                <TextField onChange={handleTextChange} margin="dense" fullWidth id='phoneNumber' label='Phone Number' placeholder="Enter your phone number"/>
                <TextField required onChange={handlePriceSelect} margin="dense" fullWidth id='price' label='Price' placeholder="Enter price" select defaultValue="$">
                    {priceSelect.map((price) => {
                        return <MenuItem key={price} id='price' value={price}>{price}</MenuItem>
                    })}
                </TextField>
                <Button type="submit" variant="contained" size="large" color="primary" fullWidth disabled={disableButton()}>Add Resaurant</Button>
            </form>
        </Paper>
    )
}

export default RestaurantNewForm