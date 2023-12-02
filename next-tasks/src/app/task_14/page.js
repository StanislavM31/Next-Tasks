"use client";

import { useState } from "react";

export default function Task14() {
  const [value, setValue] = useState();
  function show(){
    setValue("Это подсказка при наведении на кнопку");
  }
  function notshow(){
    setValue();
  }
  return (
    <>
      <p>
        4. Напишите код для отображения всплывающего окна с сообщением при
        наведении на определенный элемент на странице. (onMouseEnter
        onMouseLeave)
      </p>
      <button onMouseEnter={show} onMouseLeave={notshow}>random</button>
      <p>{value}</p>
    </>
  );
}
