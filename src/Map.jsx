import React from 'react';


export const Map = () => {
  const header = document.querySelector('.header');
  if (header.classList.contains('hidden')){
    header.classList.remove('hidden');
  };
  
  return (
    <div className="mapPage">
      <img alt="map" src="./pic/map.png" className="mapPic" />
    </div>
  )
}