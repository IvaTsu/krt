import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.nextSlide}>
      <img src={require('./../../img/Arrow.png')} alt="" />
    </div>
  );
}

export default RightArrow;
