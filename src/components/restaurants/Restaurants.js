import { useState, useEffect } from 'react'
import axios from 'axios'
import Restaurant from './Restaurant'
import './Restaurants.css'

function Restaurants() {
    const [ restaurants, setRestaurants ] = useState([]);

    const url = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${url}/api/restaurants`)
            .then((res) => {
                console.log(res.data.restaurants);
                setRestaurants(res.data.restaurants);
            })
    }, [url]);

    return (
        <div className='restaurantsList'>
            {restaurants.map(restaurant => {
                return (
                    <div key={restaurant.id}>
                        <Restaurant restaurant={restaurant} />
                    </div>
                )
            })}
        </div>
    )
}

export default Restaurants;