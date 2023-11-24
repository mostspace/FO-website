import React from "react";
import "./Footer.css";
import * as Constant from '../../constants';

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Footer = () => {
  // Fecha
  let fecha = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="site-footer">
        <div className="copyright">
          <p>
            <FormattedMessage
              id="footer-infos"
              defaultMessage="Page created by Ooumi"
            />
          </p>
          <p>&copy; {fecha}. All Rights Reserved.</p>
        </div>
        <div className="redes-sociales">
          <a
            href={Constant.SKYPE_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-skype"></i>
          </a>
          <a
            href={Constant.GITHUB_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href={Constant.GMAIL_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
