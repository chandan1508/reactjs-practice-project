
import style from "./Button.module.css";

const Button = (props) => {
  return (
     <button className={props.isOutline ? style.outline_btn : style.primary_btn}>
        {props.icon}
        {props.text}
     </button>
  );
};

export default Button;