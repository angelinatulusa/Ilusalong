import pilt from './img/pilt.png';
import pilt1 from './img/pilt1.png';
import pilt2 from './img/pilt2.png';
import pilt3 from './img/pilt3.png';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Map from './img/map.png';

export default function Home() {
    const images = [
        pilt, pilt1, pilt2, pilt3
    ];
    return <>
    <div className="slide-container">
      <Slide>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[0]})` }}>
            <span>AnnetaNail ei ole lihtsalt ilusalong, see on koht, kus teie ilu ellu äratatakse! Meie meistrid on tõelised professionaalid, kes on valmis pakkuma teile unustamatuid kogemusi ja täiuslikke tulemusi.</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[1]})` }}>
          <span>Meie salongis leiad mitte ainult personaalse lähenemise igale kliendile, vaid ka kõige arenenumad tehnikad ja tooted, et saavutada veatuid tulemusi.</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[2]})` }}>
          <span>Usalda meid ja me teeme Sinu päeva helgemaks ja ilusamaks!</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[3]})` }}>
          <span>Tere tulemast meie hubasesse ilunurka, kus iga külastaja on omaenda näituse staar!</span>
          </div>
        </div>
      </Slide>
    </div>
    <div className="text-container">
        <strong>Meie teenused ༼ つ ◕_◕ ༽つ</strong>
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
            <td><span className="service-name">Maniküür ja pediküür</span></td>
            <td><span className="service-name">Juuksuriteenused</span></td>
            <td><span className="service-name">Kulmude ja ripsmete hooldus</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h1>Ilusalongi asukoht</h1>
      <img src={Map} alt="Мы находимся здесь" />
    </div>
    </>
  }