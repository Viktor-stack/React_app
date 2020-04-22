import React from "react";
import s from "./../footer.module.scss";

const FooterItemsContent = () => {
  return (
    <div className={s.footer__itemsContacts}>
      <div className={s.itemsTitle}>Contact Us</div>
      <div className={s.contactsDesc}>
        Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel.
        Urbanitas adolescens vim te, per at tritani aperiri.
      </div>
      <div className={s.itemsInfo}>
        <span>information@jetro.com</span>
        <span> 1.222.333.4444</span>
      </div>
      <div className={s.socialIcons}>
        <a href="#">
          <img
            src="http://htmlwork.ru/wp-content/themes/jetro/assets/img/facebook.png"
            alt=""
          />
        </a>
        <a href="#">
          <img
            src="http://htmlwork.ru/wp-content/themes/jetro/assets/img/twitter.png"
            alt=""
          />
        </a>
        <a href="#">
          <img
            src="http://htmlwork.ru/wp-content/themes/jetro/assets/img/email.png"
            alt=""
          />
        </a>
        <a href="#">
          <img
            src="http://htmlwork.ru/wp-content/themes/jetro/assets/img/rss.png"
            alt=""
          />
        </a>
        <a href="#">
          <img
            src="http://htmlwork.ru/wp-content/themes/jetro/assets/img/vimeo.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default FooterItemsContent;
