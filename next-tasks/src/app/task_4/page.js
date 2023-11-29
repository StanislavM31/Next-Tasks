import style from "./style.module.css";

export default function Task4() {
  const array = ["New York", "London", "Tokyo", "Paris", "Berlin"];
  return (
    <>
      <p>
        4. Создайте массив данных, представляющий элементы, которые вы хотите
        отобразить в списке используя map. ["New York", "London", "Tokyo",
        "Paris", "Berlin"]
      </p>
      <ul className={style.block}>
        {array.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </>
  );
}
