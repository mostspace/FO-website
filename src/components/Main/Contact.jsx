import React from "react";
import "../../pages/Contact/ContactPage.css";
import * as Constant from '../../constants';
/* TypedJs */
import Typical from "react-typical";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Img */
const proyectsImgApp = require.context('../../img', true);

const Contact = () => (
  <section className="contactos" id="contactos">
    <h2 className="heading">
      <FormattedMessage id="contact" defaultMessage="私に連絡して" />
    </h2>
    <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
      <FormattedMessage id="contact-info" defaultMessage="連絡先: " />
      <Typical
        className="site-contacto"
        loop={Infinity}
        wrapper="b"
        steps={[
          "Gmail",
          1500,
          "Skype",
          1500,
          "Slack",
          1500,
          "Chatwork",
          1500,
          "Github",
          1500,
        ]}
      />
    </h3>

    <div className="icons">
      <a
        href={Constant.GMAIL_ADDRESS}
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fas fa-envelope"></span>
        </div>
        <div className="text">Gmail</div>
      </a>
      <a
        href={Constant.SKYPE_ADDRESS}
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-skype"></span>
        </div>
        <div className="text">Skype</div>
      </a>
      <a
        href={Constant.SLACK_ADDRESS}
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-slack"></span>
        </div>
        <div className="text">Slack</div>
      </a>
      <a
        href={Constant.CHATWORK_ADDRESS}
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
        className="chatworkhref"
      >
        <div className="layer chatworkLink">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {/* <span className="fab fa-chat"></span> */}
          <img src={proyectsImgApp(`./chatwork.png`)} alt="" className="chatwork" />
        </div>
        <div className="text">Chatwork</div>
      </a>
      <a
        href={Constant.GITHUB_ADDRESS}
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-github-square"></span>
        </div>
        <div className="text">GitHub</div>
      </a>
    </div>
  </section>
);

export default React.memo(Contact);
