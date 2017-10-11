import React from 'react';

import p1 from '../img/1.png';
import p2 from '../img/2.png';
import p3 from '../img/3.png';
import p4 from '../img/4.jpg';
import p5 from '../img/5.jpg';
import icon1 from '../img//Icon master.png';
import icon2 from '../img/Icon kimono.png';
import icon3 from '../img/Icon japan.png';
import icon4 from '../img/Icon karate.png';
import icon5 from '../img/data.png';
import group2 from '../img/gr2.jpg';
import d2 from '../img/d123.jpg';
import test from '../img/test.jpg';
import m from '../img/m.jpg';
import './History.css';

const History = () => {
  return (
    <div className="fluid">
      <section className="history-container">
        <div className="wrap">
        <div className="h-content">
          
          <h2><span className="line"></span>История стиля</h2>
          <p>Старое окинавское каратэ делилось три  направления – сюри-тэ, наха-тэ, и томари-тэ.</p>

          <p>В основе Конно-дзюку лежит сюри-тэ. На сегодняшний день известно множество разновидностей этого стиля. Школа Конно-дзюку сосредоточена на изначальных принципах, заложенных в истоках этих разновидностей.</p>

          <p>Поскольку на развитие сюри-тэ большое влияние оказало китайское ушу, окинавцы нередко объединяют понятия сёрин-рю (шаолинь) и сюритэ. Поэтому, с этой точки зрения,  в Конно-дзюку изучается сёрин-рю.</p>
          <img className="none" src={p4} alt="s" />
        </div>

        <div className="photo-section">
          <div className="section-p1">
            <img src={p2} alt="1" />
            <img  src={p1} alt="1" /> 
          </div>
          <div className="section-p2">
            <img src={p3} alt="3" />
          </div>
          <div className="style">
              <h2><span className="line"></span>Основатель стиля</h2>
              <p>Основатель стиля <b>Конно Сатоси</b> родился на Хоккайдо в 1955 году, окончил университет «Дзёти», где изучал стиль Сито-рю под руководством сихана Ито Сиро.</p>

              <p className="last-p">По окончании университета Конно познакомился с сиханом Икэдой Хосю, основателем стиля Дзёсинмоню. Последующие 20 лет, став адептом этого стиля, изучает каратэ направления:</p>
              <ul>
                <li>- сёринрю</li>
                <li>- бодзюцу направления Дзёсинрю</li>
                <li>- тайдзюцу</li>
                <li>- сэйтай (энергетические практики)</li>
             </ul>

              <p>В октябре 1999 года сихан Конно вышел из Дзёсинмон. Конно-дзюку, раньше входивший в Дзёсинмон в качестве одного из его филиалов, стал действовать как самостоятельная организация (и действует так до настоящего времени).</p>

              <p>Сихан Конно — обладатель ряда мастерских степеней по карате и бо-дзюцу.  Преподает каратэ Конно-дзюку, хомбу додзё которого находится в Токио.</p>

              <div className="icon">
                <img src={icon1} alt="" />
                <span>Сихан Конно — обладатель ряда мастерских степеней по карате и бо-дзюцу</span>
              </div>
              <div className="icon">
                <img src={icon2} alt="" />
                <span>Преподает каратэ Конно-дзюку, хомбу додзё которого находится в Токио</span>
              </div>
            </div>
          </div>
        </div>  
          <div className="fff">
            <img
              className="sk"
              src={p5} alt="s" />
          </div>
      </section>
      <section className="second-section">
        <div className="wrap">
          <div className="our-way">
            <h2><span className="line"></span>Наш путь</h2>
            <p>В древности воинское искусство передавалось непосредственно от мастера - ученику, от сердца - к сердцу... </p>

            <div className="icon2">
              <img src={icon3} alt="" />
              <span>Следуя этой традиции, мы совершаем поездки в Страну Восходящего Солнца, с целью получения знаний и обучению в духе старых традиций, от сердца - к сердцу....</span>
            </div>
            <div className="icon2">
              <img src={icon4} alt="" />
              <span>Порой невозможно понять ту или иную технику, не вникнув в историю и культуру, особенности отношения к жизни её создателей... Именно поэтому, наряду с изучением воинских искусств, мы стараемся глубже понять Японию, ее культуру и традиции...</span>
            </div>
            <div className="icon2">
              <img src={icon5} alt="" />
              <span>Мастера воинских искусств Страны Восходящего Солнца, уважая наш интерес, с огромным удовольствием посещают Украину, где щедро делятся своими знаниями и опытом...</span>
            </div>
            <img src={d2} alt="" className="v" />
          </div>
          <div className="view2">
            <img className="view" src={test} alt=" " />
            <img className="view-2" src={group2} alt="" />
          </div>
        </div>
      </section>
      <div className="wrap">
        <div className="last-photo">
          <img src={m} alt="" className="lf" />
        </div>
      </div> 

    </div>
  )
}


export default History;