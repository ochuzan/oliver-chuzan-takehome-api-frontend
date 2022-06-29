import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Reservation from './Reservation'

function Reservations({restaurantId}) {
  // console.log(restaurantId)
    const [reservations, setReservations] = useState([]);

    const url = process.env.REACT_APP_API_URL;

    useEffect(() => {
      axios.get(`${url}/api/reservations/`)
        .then((res) => {
          setReservations(res.data.reservations);
          console.log(res.data.reservations)
        }).catch((error) => {
          console.log(error);
        })
    }, [url, restaurantId]);


    return (
      <div className='reservationsList'>
        {reservations.map(reservation => {
          return (
              <div key={reservations.id}>
                  <Reservation reservation={reservation} />
              </div>
          )
        })}
      </div>
    )
}

export default Reservations;