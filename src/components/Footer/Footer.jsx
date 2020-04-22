import React from "react";
import s from "./footer.module.scss";
import FooterItems from "./FootrItems/FooterItems";
import FooterItemsTwitter from "./FootrItems/FooterItemsTwitter";
import FooterItemsContent from "./FootrItems/FooterItemsContent";

class Footer extends React.Component {
  email;
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className={s.inner}>
            <FooterItems />
            <FooterItemsTwitter />
            <FooterItemsContent />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
