import { useState, useEffect } from 'react'
import axios from 'axios'
import Restaurant from './Restaurant'
import './Restaurants.css'
import Searchbar from '../Searchbar';

function Restaurants() {
    const [ restaurants, setRestaurants ] = useState([]);
    const [ searchInput, setSearchInput ] = useState('');

    const url = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${url}/api/restaurants`)
            .then((res) => {
                setRestaurants(res.data.restaurants);
            })
    }, [url]);

    let searchedRestaurants = restaurants;
    if (searchInput) {
        searchedRestaurants = restaurants.filter(restaurant => {
            const restaurantNameLowerCase = restaurant.name.toLowerCase();
            return restaurantNameLowerCase.includes(searchInput.toLowerCase());
        })
    }

    return (
        <div>
            <Searchbar searchInput={searchInput} setSearchInput={setSearchInput}/>
            {searchedRestaurants.length === 0 && <div className='noResults'>No Results for "{searchInput}"</div>}
            <div className='restaurantsList'>
                {searchedRestaurants.map(restaurant => {
                    return (
                        <div key={restaurant.id}>
                            <Restaurant restaurant={restaurant} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Restaurants;