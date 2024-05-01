import React, { useEffect } from 'react';
import ymaps from 'ymaps';

const Map = () => {
  useEffect(() => {
    ymaps.load('https://api-maps.yandex.ru/2.0/?load=package.standard&lang=ru-RU', function() {
      const myMap = new ymaps.Map('map', {
        center: [59.4426755, 24.7032051],
        zoom: 17
      });

      const myPlacemark = new ymaps.Placemark([59.442632, 24.703464], {
        iconContent: '41',
        balloonContent: 'Балун',
        hintContent: 'Дом'
      }, {
        preset: 'twirl#violetIcon'
      });

      myMap.geoObjects.add(myPlacemark);

      myMap.controls
        .add('zoomControl', { left: 5, top: 5 })
        .add('typeSelector')
        .add('mapTools', { left: 35, top: 5 });

      const trafficControl = new ymaps.control.TrafficControl();
      myMap.controls
        .add(trafficControl)
        .add(new ymaps.control.MiniMap({
          type: 'yandex#publicMap'
        }));
    });
  }, []);

  return <div id="map" style={{ width: '400px', height: '300px' }} />;
};

export default Map;
