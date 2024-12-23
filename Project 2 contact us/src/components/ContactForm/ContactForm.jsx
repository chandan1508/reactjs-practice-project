import Button from "../Button/Button";
import style from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className={style.container}>
      <div className={style.contact_form}>
        <div className={style.top_btn}>
          <Button text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL"
            icon={<FaPhoneAlt fontSize="24px" />}
          />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM"
          icon={<MdMail fontSize="24px" />}
        />

        <form>
          <div className={style.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={style.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={style.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8}/>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
          <Button text="SUBMIT BUTTON" />
          </div>
        </form>
      </div>
      <div className={style.contact_image}>
        <img src="./images/contact.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;