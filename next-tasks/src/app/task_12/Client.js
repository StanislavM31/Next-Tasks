"use client";

import style from "./style.module.css";

export default function Client({Input}) {
  return (
    <>

      <div className={style.form}>
        <Input />

        <button className={style.btn} onClick={() => alert("hi")}>
          press
        </button>
      </div>
    </>
  );
}
