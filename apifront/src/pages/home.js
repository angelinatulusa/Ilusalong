import pilt from './img/pilt.png';
import pilt1 from './img/pilt1.png';
import pilt2 from './img/pilt2.png';
import pilt3 from './img/pilt3.png';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

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
    <div class="text-container">
        <strong>Наши услуги ༼ つ ◕_◕ ༽つ</strong>
    </div>
    <div class="table-container">
      <table>
      <tr>
        <td class="td-button"><button class="image-button"></button></td>
        <td class="td-button"><button class="image-button2"></button></td>
        <td class="td-button"><button class="image-button3"></button></td>
      </tr>
      <tr>
        <td><span class="service-name">Маникюр и педикюр</span></td>
        <td><span class="service-name">Парикмахерские услуги</span></td>
        <td><span class="service-name">Брови и ресницы</span></td>
      </tr>
      </table>
    </div>
    </>
  }