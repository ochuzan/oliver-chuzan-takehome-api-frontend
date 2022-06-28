import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

function RestaurantNewForm() {
    const [ restaurant, setRestaurant ] = useState({
      name: "",
      description: "",
      phoneNumber: "",
      openingTime: "", // time of day
      closingTime: "", // time of day
      price: "",
      cuisine: "",
      location: "",
      diningRestriction: ""
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

    return (
      <div className="restaurant-new-form">
            <div>
                <h2>Add a New Restaurant</h2>
            </div>
            <Box
                className="box"
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    // bgcolor: 'rgba(240,248,255, .9)',
                    border: 1,
                    height: 350,
                    borderRadius: 5,
                    boxShadow: 5
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <div>
                    <TextField
                        required
                        id="name"
                        label="Restaurant Name"
                        onChange={handleTextChange}
                        variant="filled"
                        color="primary"
                        focused
                    />
                    <TextField
                        required
                        id="description"
                        label="Description"
                        onChange={handleTextChange}
                        variant="filled"
                        color="primary"
                        focused
                    />
                </div>
                <div>
                    <TextField
                        id="phoneNumber"
                        label="Phone Number"
                        onChange={handleTextChange}
                        variant="filled"
                        color="primary"
                        focused
                    />
                    <TextField
                        required
                        // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        id="openingTime"
                        label="Opening Time"
                        onChange={handleTextChange}
                        variant="filled"
                        color="primary"
                        focused
                    />
                    <TextField
                        required
                        // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        id="closingTime"
                        label="Closing Time"
                        onChange={handleTextChange}
                        variant="filled"
                        color="primary"
                        focused
                    />
                </div>
                <div>
                    <TextField
                        required
                        inputProps={{ inputMode: 'string', pattern: '[$$$$]*' }}
                        id="price"
                        label="Price"
                        helperText="Rating of $-$$$$ only"
                        onChange={handleTextChange}
                        variant="filled"
                        color="primary"
                        focused
                    />
                    <TextField
                        required
                        id="cuisine"
                        label="Cuisine"
                        onChange={handleTextChange}
                        variant="filled"
                        color="primary"
                        focused
                    />
                    <TextField
                    required
                        id="location"
                        label="Location"
                        onChange={handleTextChange}
                        variant="filled"
                        color="primary"
                        focused
                    />
                    {/* <TextField
                        id="diningRestriction"
                        label="diningRestriction"
                        onChange={handleTextChange}
                        variant="filled"
                        color="primary"
                        focused
                    /> */}
                </div>
                <div>
                    <Button variant="contained" type="submit" disabled={disableButton()}>Submit</Button>
                </div>
            </Box>
        </div>
    )
}

export default RestaurantNewForm