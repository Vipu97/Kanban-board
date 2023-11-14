import React from 'react'
import './ProfileIcon.css';

const generateRandomColour = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return color;
}

const ProfileIcon = ({name}) => {
    const [firstName, lastName] = name.split(' ');
    const firstLetter = firstName ? firstName[0] : '';
    const lastLetter = lastName ? lastName[0] : '';

    const symbol = firstLetter.toUpperCase() + lastLetter.toUpperCase();
    const bgColor = generateRandomColour();
    
  return (
    <div className='profile-wrapper' style={{backgroundColor:bgColor}}>
        <span>{symbol}</span>
    </div>
  )
}

export default ProfileIcon