import React from 'react';

const Slide = (props) => {
  const current = props.background[props.current];

  const styles = {
    imageBackground: {
      backgroundImage: `url(${current}.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }
  }
  return <div className="slide" style={styles.imageBackground}>
    <img className="lineOnSlide" src={require('./../../img/line.png')} alt="" />
    <div className="textOnSlide">
      <img className="rectangleOnSlide" src={require('./../../img/Rectangle.png')} alt="" /><span className="textOnSlide--bold">Группа единомышленников,<br /></span> изучающих воинские искусства,<br /> культуру и историю Страны <br />Восходящего Солнца
    </div>

  </div>

}

export default Slide;
