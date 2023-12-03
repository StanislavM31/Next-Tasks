"use client";
import { useState, useEffect } from "react";
import style from "./style.module.css"
export default function TaskList({button}) {
  const [arrValues, setArrValues] = useState(["go", "swim", "run"]);
  useEffect(() => {
    if (button.trim() !== '') {
      setArrValues(arrValues => [...arrValues, button]);
    }
  }, [button]);
  return (
    <>
      <div>{arrValues.map((el, index)=>
      <p className={style.elem} key={index}>{el}</p>
      )}</div>
    </>
  );
}
