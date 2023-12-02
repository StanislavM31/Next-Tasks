import Image from "next/image";
import style from "./page.module.css";
import Link from "next/link";

import task1 from "./task_1/page";
import task2 from "./task_2/page";
import task3 from "./task_3/page";
import task4 from "./task_4/page";
import task5 from "./task_5/page";
import task6 from "./task_6/page";

export default function Home() {
  return (

    <div className={style.wrapper}>
    <h1 className={style.h1}>React Next Tasks</h1>
      <div className={style.superblock}>
        <p>
          <Link href="/task_1">задача №1</Link>
        </p>
        <p>
          <Link href="/task_2">задача №2</Link>
        </p>
        <p>
          <Link href="/task_3">задача №3</Link>
        </p>
        <p>
          <Link href="/task_4">задача №4</Link>
        </p>
        <p>
          <Link href="/task_5">задача №5</Link>
        </p>
        <p>
          <Link href="/task_6">задача №6</Link>
        </p>
      </div>
    </div>

  );
}
