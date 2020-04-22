import React, { Component } from "react";
import s from "./../footer.module.scss";

const FooterItemsTwitter = () => {
  return (
    <div className={s.footer__itemsTwitter}>
      <div className={s.itemsTitle}>Twitter Widget</div>
      <div className={s.twitterDesc}>
        <a className={s.mailing} href="#">
          @pixelmater{" "}
        </a>
        What an awesome design with great functionality :)
        <span>about 1 hour ago</span>
      </div>
      <div className={s.twitterDesc}>
        <a className={s.mailing} href="#">
          {" "}
          @designdude{" "}
        </a>
        What an awesome design with great functionality :)
        <span>about 2 hour ago</span>
      </div>
      <div className={s.twitterDesc}>
        Follow
        <a className={s.mailing} href="mailto:grohik493@gmail.com">
          @bestpsdfreebies
        </a>
      </div>
    </div>
  );
};

export default FooterItemsTwitter;
