import React from 'react'

function Restaurant({restaurant}) {
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

export default Restaurant;