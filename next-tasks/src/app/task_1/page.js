import style from "./style.module.css"
export default function Task1(){
    return(
        <>
        <p>1. Создайте форму для ввода имени, фамилии, адреса электронной почты и пароля.</p>
        <div class={style.form}>
            <input class={style.input} type="text" placeholder="name"/>
            <input class={style.input} type="text" placeholder="surname"/>
            <input class={style.input} type="text" placeholder="email"/>
            <input class={style.input} type="text" placeholder="password"/>
            <button class={style.btn}>click!</button>
        </div>
        </>
    )
}