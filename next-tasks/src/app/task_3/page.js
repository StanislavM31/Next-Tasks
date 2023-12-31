'use client'
import style from "./style.module.css";
import {useState } from "react";

export default function Task3() {
  const [obj, setObj] = useState({});

  function fillInput(e){
    setObj({...obj, [e.target.name]: e.target.value})
  }
  function doCheck(){
    if(!/^[a-zA-Z-_0-9]+@[a-z]+.[a-z]{2,10}/gm.test(obj.email) || !isNaN(obj.name) || !isNaN(obj.surname) || !(obj.pwd.length)){
      alert(false)
    } else {
      console.log(obj);
    }
  }

  return (
    <>
      <p>
        3. Создайте форму для ввода данных. По клику на кнопку получите данные
        из input и отобразите в консоль
      </p>
      <div classNameName={style.form}>
            <input onChange={fillInput} name = "name" classNameName={style.input} type="text" placeholder="name"/>
            <input onChange={fillInput} name = "surname" classNameName={style.input} type="text" placeholder="surname"/>
            <input onChange={fillInput} name = "email" classNameName={style.input} type="text" placeholder="email"/>
            <input onChange={fillInput} name = "pwd" classNameName={style.input} type="text" placeholder="password"/>
            <button onClick={doCheck} classNameName={style.btn}>-PRESS-</button>
        </div>
    </>
  );
}
