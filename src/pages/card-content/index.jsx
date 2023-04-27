/* eslint-disable react/prop-types */
import style from "./style.module.css"

export function Card(props) {
  return (
    <div className={style.divContent}>
        <h3 className={style.cardTitle}>{props.cardTitle} </h3>
        <p className={style.cardContent}>{props.cardContent} </p>

    </div>
  );
}
