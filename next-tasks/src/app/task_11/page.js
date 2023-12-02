import style from "./style.module.css";
import Input from "./input"
export default function Task11() {
  return (
    <>
      <p>
        1. Реализуйте два серверных компонента. Первый – Input.js, второй –
        page.js. Input.js содержит статичный input. Страница page.js содержит
        форму из двух компонентов Input.js и кнопки.
      </p>
      <div className={style.form}>
        <Input/>
        <button className={style.btn}>push!</button>
      </div>
    </>
  );
}
