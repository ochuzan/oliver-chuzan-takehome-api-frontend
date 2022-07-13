import { useState, useEffect } from 'react'
import axios from 'axios'
import Restaurant from './Restaurant'
import './Restaurants.css'
import Searchbar from '../Searchbar';
import { Button } from '@mui/material';

// Sort the restaurant name by alphabetical order 
// Sort on default
// Now a button

function Restaurants() {
    const [ restaurants, setRestaurants ] = useState([]);
    const [ searchInput, setSearchInput ] = useState('');
    const [ sort, setSort ] = useState(false);

    const url = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${url}/api/restaurants`)
            .then((res) => {
                setRestaurants(res.data.restaurants);
            })
    }, [url]);

    const handleSort = () => {
        let restaurantList = restaurants;
        const sortedRestaurantList = restaurantList.sort((a, b) => {
            if(a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0;
            }
        })
        setSort(!sort);
    }

    let searchedRestaurants = restaurants;
    if (searchInput) {
        searchedRestaurants = restaurants.filter(restaurant => {
            const restaurantNameLowerCase = restaurant.name.toLowerCase();
            return restaurantNameLowerCase.includes(searchInput.toLowerCase());
        })
    }


    return (
        <div>
            <Button variant="contained" onClick={handleSort}>Contained</Button>
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

