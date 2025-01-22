import React from 'react';

export default function InfiniteScrollImage({ image }) {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        <img src={image} alt="Scrolling Image" />
        <img src={image} alt="Scrolling Image" />
        <img src={image} alt="Scrolling Image" />
      </div>
    </div>
  );
}
