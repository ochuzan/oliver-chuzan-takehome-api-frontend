import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function RestaurantDetails() {
    const [ restaurant, setRestaurant ] = useState({});

    const url = process.env.REACT_APP_API_URL;
    let { id } = useParams();
    id = id.slice(0, -1)
    // let navigate = useNavigate();

    useEffect(() => {
      axios.get(`${url}/api/restaurants/${id}`)
        .then((res) => {
          setRestaurant(res.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [url, id]);

    // const handleDelete = () => {
    //   axios.delete(`${url}/api/restaurants/${id}`)
    //       .then((res) => {
    //           navigate("/restaurants")
    //       }).catch((error) => {
    //           console.log(error);
    //       })
    // };

    const { name, description, cuisine, location, openingTime, closingTime, phoneNumber, price } = restaurant;

    return (
        <div className='restaurant'>
          <div className='restaurant__name'>
            {name}
          </div>
          <div className='restaurant__description'>
            {description}
          </div>
          <div className='restaurant__cuisine'>
            {cuisine}
          </div>
          <div className='restaurant__location'>
            {location}
          </div>
          <div className='restaurant__openingTime'>
            {openingTime} - {closingTime}
          </div>
          <div className='restaurant__phoneNumber'>
            {phoneNumber}
          </div>
          <div className='restaurant__price'>
            {price}
          </div>
      </div>
    )
}

export default RestaurantDetails