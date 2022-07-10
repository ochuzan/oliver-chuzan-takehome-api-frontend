import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Button, Grid, Paper, TextField, Typography, MenuItem, Select } from "@mui/material";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';


function RestaurantUpdateForm() {
    const [ restaurant, setRestaurant ] = useState({
      name: "",
      description: "",
      phoneNumber: "",
      openingTime: "",
      closingTime: "",
      price: "",
      cuisine: "",
      location: "",
      diningRestriction: ""
    });

    const url = process.env.REACT_APP_API_URL;
    let { id } = useParams();
    // id = id.slice(0, -1)
    let navigate = useNavigate();

    useEffect(() => {
      axios.get(`${url}/api/restaurants/${id}`)
        .then((res) => {
          setRestaurant(res.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [url, id]);

    const updateRestaurant = (updatedRestaurant) => {
      axios.patch(`${url}/api/restaurants/${id}`, updatedRestaurant)
        .then((res) => {
          navigate(`/restaurants/${id}`);
        }).catch((error) => {
          console.log(error);
        })
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
    };

    const checkRestaurantBeforePatching = (restaurant) => {
      for (let field in restaurant) {
        if (restaurant[field] === "" || field === "id" || field === "reservations") {
          delete restaurant[field];
        }
      }
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      checkRestaurantBeforePatching(restaurant);
      updateRestaurant(restaurant);
    };

    const { name, description, openingTime, closingTime, phoneNumber, price, cuisine, location } = restaurant;
    const priceSelect = ["$", "$$", "$$$", "$$$$"];
    return (
      // <Grid>
      <Paper elevation={20} sx={{padding: "30px 20px", width: 400, margin: "20px auto"}}>
      <Grid align="center" sx={{marginBottom:"10px"}}>
        <Avatar sx={{backgroundColor: "#FE462D"}}>
          <PersonAddAltOutlinedIcon/>
        </Avatar>
        <Typography sx={{fontWeight: "600", color: "#FE462D"}} variant='h5'>Edit Restaurant</Typography>
        <Typography variant="caption">Please use this form to edit your restaurant</Typography>
        <div>
          <Typography variant="caption">Required fields are marked with an asterisk: *</Typography>
        </div>
      </Grid>
      <form onSubmit={handleSubmit}>
        <TextField required onChange={handleTextChange} margin="dense" fullWidth value={name} id='name' label='Resaurant Name' placeholder="Enter your restaurant name"/>
        <TextField required onChange={handleTextChange} margin="dense" fullWidth value={description} id='description' label='Description' placeholder="Enter restaurant description" multiline maxRows={5}/>
        <TextField required onChange={handleTextChange} margin="dense" fullWidth value={cuisine} id='cuisine' label='Cuisine' placeholder="Enter restaurant cuisine"/>
        <TextField required onChange={handleTextChange} margin="dense" fullWidth value={location} id='location' label='Location' placeholder="Enter restaurant location"/>
        <TextField required onChange={handleTextChange} margin="dense" fullWidth value={openingTime} id='openingTime' label='Opening Time' placeholder="Enter restaurant opening time"/>
        <TextField required onChange={handleTextChange} margin="dense" fullWidth value={closingTime} id='closingTime' label='Closing Time' placeholder="Enter restaurant closing time"/>
        <TextField onChange={handleTextChange} margin="dense" fullWidth value={phoneNumber || ""} id='phoneNumber' label='Phone Number' placeholder="Enter your phone number"/>
        <TextField required onChange={handlePriceSelect} margin="dense" fullWidth id='price' label='Price' placeholder="Enter price" select value={price}>
          {priceSelect.map((price) => {
            return <MenuItem key={price} id='price' value={price}>{price}</MenuItem>
          })}
        </TextField>
        <Button type="submit" variant="contained" size="large" color="primary" fullWidth disabled={disableButton()}>Update Restaurant</Button>
      </form>
    </Paper>
// </Grid>
    )
}

export default RestaurantUpdateForm;