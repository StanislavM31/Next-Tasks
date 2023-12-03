"use client";
import style from "./style.module.css";
import { useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

export default function page() {
  const [inpValue, setInpValue] = useState('');
  const [button, setButton] = useState('');


  return (
    <div className={style.block}>
      <p>
        5. Реализуйте компонент TaskList.js для отображения списка задач и
        AddTask.js для добавления новых задач. Страница page.js должна содержать
        оба компонента
      </p>
      <div><AddTask inpValue={inpValue} setInpValue={setInpValue} setButton={setButton}/>
      </div>
      <div><TaskList button={button}/>
      </div>
    </div>
  );
}
