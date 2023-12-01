import style from "./style.module.css"
export default function Task1(){
    return(
        <>
        <p>1. Создайте форму для ввода имени, фамилии, адреса электронной почты и пароля.</p>
        <div className={style.form}>
            <input className={style.input} type="text" placeholder="name"/>
            <input className={style.input} type="text" placeholder="surname"/>
            <input className={style.input} type="text" placeholder="email"/>
            <input className={style.input} type="text" placeholder="password"/>
            <button className={style.btn}>click!</button>
        </div>
        </>
    )
}