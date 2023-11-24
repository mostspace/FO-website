import React from "react";
import "./Content.css";
import * as Constant from '../../constants';
import ParticleHeaderBg from "../ParticlesBg/ParticlesHeader/ParticleHeaderBg";

/* ReactScroll */
import { Link } from "react-scroll";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Content = () => (
  <div className="contenido">
    {/* <ParticleHeaderBg /> */}
    <section className="inicio" id="inicio">
      <div className="titulo">
        <h1 data-aos="fade-up" data-aos-delay="500">
          <FormattedMessage id="namess" defaultMessage="ウェブおよびモバイル開発 | UI & UXデザイン" />
        </h1>
        <p className="h_intro">2012 年に始まった私の旅により、私は Web およびアプリ開発、Web マーケティング、およびデザインの専門家としての地位を確立しました。</p>

        <div className="wrapper">
          <a
            className="button"
            href={Constant.SKYPE_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="icon">
              <i className="fab fa-skype"></i>
            </div>
            <span>Skype</span>
          </a>
          <a
            className="button"
            href={Constant.SLACK_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="icon">
              <i className="fab fa-slack"></i>
            </div>
            <span>Slack</span>
          </a>
          <a
            className="button"
            href={Constant.GITHUB_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="icon">
              <i className="fab fa-github"></i>
            </div>
            <span>Github</span>
          </a>
          <a
            className="button"
            href={Constant.GMAIL_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="icon">
              <i className="fab fas fa-envelope"></i>
            </div>
            <span>Gmail</span>
          </a>
        </div>

        <Link to="sobre-mi" href="#sobre-mi">
          <div className="scroll-down"></div>
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
