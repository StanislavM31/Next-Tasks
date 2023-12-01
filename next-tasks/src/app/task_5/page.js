"use client";
import style from "./style.module.css";
import { useState} from "react";

export default function Task5() {
  const [state, setState] = useState('no');


  function displayClick(params) {
    console.log(params.target.innerHTML);
    setState(params.target.innerHTML);
  }
  const cities = ["New York", "London", "Tokyo", "Paris", "Berlin"];
  return (
    <>
      <p>
        5. Создайте массив данных, представляющий элементы, которые вы хотите
        отобразить в списке используя map. ["New York", "London", "Tokyo",
        "Paris", "Berlin"]. Добавить событие клика с распознаванием на какой
        именно li был совершен клик
      </p>
      <div className={style.block}>
        {
          cities.map((city, i)=>(
            <p key={i} onClick={displayClick}>{city}</p>
          ))
        }
      </div>
      <div>You clicked: {state} city</div>
    </>
  );
}
