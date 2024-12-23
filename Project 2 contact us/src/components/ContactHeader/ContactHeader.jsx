import style from './ContactHeader.module.css';

const ContactHeader = () => {
  return (
    <div className={`${style.contact_section} container`}>
        <h1>Contact us</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, minus quidem nobis facere vero deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quos natus ut sit voluptate dicta?</p>
    </div>
  );
};

export default ContactHeader;