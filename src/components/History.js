import React from 'react';

import p1 from '../img/1.png';
import p2 from '../img/2.png';
import p3 from '../img/3.png';
import p4 from '../img/4.jpg';
import p5 from '../img/5.jpg';
import p6 from '../img/6.jpg';
import './History.css';

const History = () => {
  return (
    <div className="fluid">
    <div className="wrap">
      <section className="history-container">
        <div className="h-content">
          
          <h2><span className="line"></span>История стиля</h2>
          <p>Старое окинавское каратэ делилось три  направления – сюри-тэ, наха-тэ, и томари-тэ.</p>

          <p>В основе Конно-дзюку лежит сюри-тэ. На сегодняшний день известно множество разновидностей этого стиля. Школа Конно-дзюку сосредоточена на изначальных принципах, заложенных в истоках этих разновидностей.</p>

          <p>Поскольку на развитие сюри-тэ большое влияние оказало китайское ушу, окинавцы нередко объединяют понятия сёрин-рю (шаолинь) и сюритэ. Поэтому, с этой точки зрения,  в Конно-дзюку изучается сёрин-рю.</p>
          <img src={p4} alt="s" />
        </div>

        <div className="photo-section">
          <div className="section-p1">
            <img src={p2} alt="1" />
            <img src={p1} alt="1" />
          </div>
          <div className="section-p2">
            <img src={p3} alt="3" />
          </div>
        </div>
      </section>
      </div>
       <div className="fff">
        <img src={p5} alt="s" />
        <img src={p6} alt="s" />  
      </div>    
    </div>  
  )
}


export default History;