"use client";
import style from "./style.module.css";
import { useState } from "react";

export default function Task7() {
  const [state, setState] = useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit.');
  const [toggle, setToggle] = useState(true);

  function displayClick(params) {
    setState(!params.target.innerHTML);
    setToggle(!toggle);
    toggle?setState('Lorem ipsum dolor, sit amet consectetur adipisicing elit.'):setState("")
  }
  return (
    <div className={toggle ? style.themeDark : style.themeLight}>
      <p>
        7. Создайте кнопки "Показать текст", "Скрыть текст", параграф.
      </p>
      <p>Используйте useState для отслеживания текущего выбора пользователя. В
        зависимости от выбора, отображайте соответствующий контент</p>
      <div className={style.container}>
        <p className={style.text}>{state}</p>
        <div className={style.btnDark} onClick={displayClick} >Показать</div>
        <div className={style.btnLight} onClick={displayClick} >Скрыть</div>
      </div>
    </div>
  );
}
