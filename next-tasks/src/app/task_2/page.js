'use client';
import style from "./style.module.css";
import { useEffect, useState } from "react";

export default function Task2() {

  const [obj, setObj] = useState({});

  function fillInput(e){
    setObj({...obj, [e.target.name]: e.target.value})
  }
  function doCheck(){
    if(!/^[a-zA-Z-_0-9]+@[a-z]+.[a-z]{2,10}/gm.test(obj.email) || !isNaN(obj.name) || !isNaN(obj.surname) || !isNaN(obj.pwd)){
      console.log("поля не заполнены");
      console.log("object is: ", obj);
    } else {
      console.log("object is: ", obj);
      console.log("Поля заполнены");
    }
  }
  return (
    <>
      <p>
        2. Создайте форму для ввода имени, фамилии, адреса электронной почты и
        пароля. По клику на кнопку проверить вводимые данные на регулярные
        выражения. В случае успешной валидации – alert(true)
      </p>
      <div className={style.form}>
            <input onChange={fillInput} name = "name" className={style.input} type="text" placeholder="name"/>
            <input onChange={fillInput} name = "surname" className={style.input} type="text" placeholder="surname"/>
            <input onChange={fillInput} name = "email" className={style.input} type="text" placeholder="email"/>
            <input onChange={fillInput} name = "pwd" className={style.input} type="text" placeholder="password"/>
            <button onClick={doCheck} className={style.btn}>PUSH!</button>
        </div>
    </>
  );
}
