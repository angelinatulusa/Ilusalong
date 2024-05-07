import pilt from './img/pilt.png';
import pilt1 from './img/pilt1.png';
import pilt2 from './img/pilt2.png';
import pilt3 from './img/pilt3.png';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Map from './map';

export default function Home() {
    const images = [
        pilt, pilt1, pilt2, pilt3
    ];
    return <>
    <div className="slide-container">
      <Slide>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[0]})` }}>
            <span>AnnetaNail - это не просто салон красоты, это место, где ваша красота оживает! 
        Наши мастера - настоящие профессионалы своего дела, готовые подарить вам незабываемый опыт и идеальный результат.</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[1]})` }}>
          <span>В нашем салоне вы найдете не только индивидуальный подход к каждому клиенту, но и самые передовые техники и продукты, 
        чтобы достичь безупречных результатов.</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[2]})` }}>
          <span>Доверьтесь нам, и мы сделаем ваш день ярче и красивее!</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[3]})` }}>
          <span>Добро пожаловать в наш уютный уголок красоты, где каждый посетитель - звезда своего собственного шоу!</span>
          </div>
        </div>
      </Slide>
    </div>
    <div className="text-container">
        <strong>Наши услуги ༼ つ ◕_◕ ༽つ</strong>
    </div>
    <div className="table-container">
      <table>
        <tbody>
          <tr>
            <td className="td-button"><button className="image-button"></button></td>
            <td className="td-button"><button className="image-button2"></button></td>
            <td className="td-button"><button className="image-button3"></button></td>
          </tr>
          <tr>
            <td><span className="service-name">Маникюр и педикюр</span></td>
            <td><span className="service-name">Парикмахерские услуги</span></td>
            <td><span className="service-name">Брови и ресницы</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h1>Местонахождение салона</h1>
      <Map />
    </div>
    <div>
      <h3>Наш адрес: Vesivärava 53c</h3>
    </div>
    </>
  }