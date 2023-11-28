import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import task1 from "./task_1/page";
import task2 from "./task_2/page";
import task3 from "./task_3/page";
import task4 from "./task_4/page";
import task5 from "./task_5/page";

export default function Home(){
  return (
    <>
      <h1>React Next Tasks</h1>
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
    </>
  );
}