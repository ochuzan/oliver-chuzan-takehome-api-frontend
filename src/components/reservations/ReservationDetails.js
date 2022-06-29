import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

function ReservationDetails() {
    const [ reservation, setReservation ] = useState({});

    const url = process.env.REACT_APP_API_URL;
    let { id } = useParams();
    id = id.slice(0, -1)
    let navigate = useNavigate();

    useEffect(() => {
      axios.get(`${url}/api/reservations/${id}`)
        .then((res) => {
          setReservation(res.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [url, id]);

    const handleDelete = () => {
      axios.delete(`${url}/api/restaurants/${id}`)
          .then((res) => {
              navigate("/restaurants")
          }).catch((error) => {
              console.log(error);
          })
    };

    const {createdAt, firstName, lastName, email, numGuests, phoneNumber, time, restaurantId,} = reservation;

    return (
      <div className='reservation'>
          <div className='reservation__name'>
            Guest Name: {firstName} {lastName}
          </div>
          <div className='reservation__email'>
            {email}
          </div>
          <div className='reservation__phoneNumber'>
            {phoneNumber}
          </div>
          <div className='reservation__restaurant'>
            Restaurant: {restaurantId}
          </div>
          <div className='reservation__numGuests'>
            Number of Guests: {numGuests}
          </div>
          <div className='reservation__time'>
            Reservation Time: {time}
          </div>
      </div>
    )
}

export default ReservationDetails;