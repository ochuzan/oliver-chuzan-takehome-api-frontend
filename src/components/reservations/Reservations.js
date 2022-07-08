import axios from "axios";
import { useState, useEffect } from "react";
import Reservation from './Reservation'
import './Reservations.css'

function Reservations() {
    const [reservations, setReservations] = useState([]);

    const url = process.env.REACT_APP_API_URL;

    useEffect(() => {
      axios.get(`${url}/api/reservations/`)
        .then((res) => {
          setReservations(res.data.reservations);
        }).catch((error) => {
          console.log(error);
        })
    }, [url]);


    return (
      <div className='reservationsList'>
        {reservations.map(reservation => {
          return (
              <div key={reservation.id}>
                  <Reservation reservation={reservation} />
              </div>
          )
        })}
      </div>
    )
}

export default Reservations;