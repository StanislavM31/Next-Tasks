"use client";
import style from "./style.module.css";
import { useState } from "react";

export default function Task6() {
  const [state, setState] = useState("no");
  const [toggle, setToggle] = useState(true);

  function displayClick(params) {
    console.log(params.target.innerHTML);
    setState(params.target.innerHTML);
  }

  const cities = ["New York", "London", "Tokyo", "Paris", "Berlin"];
  return (
    <div className={toggle? style.themeDark: style.themeLight}>
      <p>
        6. Создайте кнопку, которая позволяет пользователю переключаться между
        светлой и темной темой интерфейса. Используйте useState, чтобы
        отслеживать текущую тему. Применяйте соответствующие стили в зависимости
        от выбранной темы.
      </p>
      <div className={toggle? style.blockDark: style.blockLight}>
        {cities.map((city, i) => (
          <p key={i} onClick={displayClick}>
            {city}
          </p>
        ))}
      </div>
      <div className={toggle? style.btnDark: style.btnLight} onClick={()=>setToggle(!toggle)}>
        switch
      </div>
      <div>You clicked: {state} city</div>
    </div>
  );
}
