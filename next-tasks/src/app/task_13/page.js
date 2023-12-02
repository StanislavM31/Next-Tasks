"use client";

import  {useState} from 'react';


export default function Task13() {
  const [value, setValue] = useState(null);
  const arr = ['a', 'b','c','d', 'e', 'f', 'g'];

  function random(){
    setValue(arr[Math.floor(Math.random()*arr.length)]);
  }
  return (
    <>
      <p>
      3. Напишите скрипт, который при нажатии на кнопку будет выводить
        случайное сообщение из заранее заданного списка
      </p>
      <button onClick={random}>random</button>
      <p>random Item of array is: {value}</p>
    </>
  );
}
