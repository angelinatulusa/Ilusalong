import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

// Создание корня для рендеринга приложения
const root = ReactDOM.createRoot(document.getElementById("root"));

// Загрузка API Яндекс.Карты с вашим ключом API
const script = document.createElement("script");
script.src = `https://api-maps.yandex.ru/2.1/?apikey=d9ec569e-5762-4d62-91cd-fefd6bfea6a4&lang=ru_RU`;
script.async = true;
script.onload = () => {
  // Рендеринг приложения после загрузки API
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};
document.body.appendChild(script);
