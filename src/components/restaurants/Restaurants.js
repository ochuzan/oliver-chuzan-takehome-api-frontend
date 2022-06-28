import { useState, useEffect } from 'react'
import axios from 'axios'
import Restaurant from './Restaurant'

function Restaurants() {
    const [ restaurants, setRestaurants ] = useState([])

    const url = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${url}/api/restaurants`)
            .then((res) => {
                console.log(res.data.restaurants);
                setRestaurants(res.data.restaurants);
            })
    }, []);

    return (
        <div className='restaurants'>
            {restaurants.map(restaurant => {
                return (
                    <div>
                        <Restaurant restaurant={restaurant}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Restaurants