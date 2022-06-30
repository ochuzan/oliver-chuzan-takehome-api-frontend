import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

function RestaurantUpdateForm() {
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
    let { id } = useParams();
    // id = id.slice(0, -1)
    // console.log(id)
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

    const disableButton = () => {
      const { name, description, openingTime, closingTime, price, cuisine, location } = restaurant;

      if(name && description && cuisine && location && openingTime && closingTime && price){
          return false;
      } else {
          return true;
      }
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(restaurant)
      updateRestaurant(restaurant);
    };

    return (
      <div>
            <div className="restaurant-update-form">
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
                      value={restaurant.name}
                      label="Restaurant Name"
                      onChange={handleTextChange}
                      variant="filled"
                      color="primary"
                      focused
                  />
                  <TextField
                      required
                      id="description"
                      value={restaurant.description}
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
                      value={restaurant.phoneNumber}
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
                      value={restaurant.openingTime}
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
                      value={restaurant.closingTime}
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
                      value={restaurant.price}
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
                      value={restaurant.cuisine}
                      label="Cuisine"
                      onChange={handleTextChange}
                      variant="filled"
                      color="primary"
                      focused
                  />
                  <TextField
                  required
                      id="location"
                      value={restaurant.location}
                      label="Location"
                      onChange={handleTextChange}
                      variant="filled"
                      color="primary"
                      focused
                  />
                  {/* <TextField
                      id="diningRestriction"
                      value={restaurant.diningRestriction}
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
      </div>
    )
}

export default RestaurantUpdateForm