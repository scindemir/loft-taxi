import React from 'react';


export const Profile = () => {
  const header = document.querySelector('.header');
  if (header.classList.contains('hidden')){
    header.classList.remove('hidden');
  };
  
  return (
    <h1>Profile!</h1>
  )
}