import React, { useState } from 'react'
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
const proyectsImg = require.context('../../img', true);

const Project = () => {
  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage
              id='projects'
              defaultMessage='プロジェクト'
            />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              <FormattedMessage
                id='site-web'
                defaultMessage='ウェブサイト'
              />
            </NavLink>
            <NavLink to="/project/app" offset={-150} duration={500}>
              アプリ
            </NavLink>
            {/* <NavLink to="/project/design" offset={-150} duration={500}>
              <FormattedMessage
                  id='design'
                  defaultMessage='デザイン'
              />
            </NavLink> */}
          </nav>
        </section>

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a href="https://awenite.tokyo/" target="_blank">
              <img src={proyectsImg(`./pro_web/project1.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://zeteohai.netlify.app/ja" target="_blank">
              <img src={proyectsImg(`./pro_web/project2.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://www.xmile.co.jp/recruit" target="_blank">
              <img src={proyectsImg(`./pro_web/project19.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://atom-inc.co.jp/" target="_blank">
              <img src={proyectsImg(`./pro_web/project16.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://atom-inc.co.jp/" target="_blank">
              <img src={proyectsImg(`./pro_web/project17.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://notahotel.com/" target="_blank">
              <img src={proyectsImg(`./pro_web/project3.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://atom-inc.co.jp/" target="_blank">
              <img src={proyectsImg(`./pro_web/project18.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://www.awarefy.com/lp" target="_blank">
              <img src={proyectsImg(`./pro_web/project4.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://www.oh-my-teeth.com/" target="_blank">
              <img src={proyectsImg(`./pro_web/project14.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://www.hitohata.jp/" target="_blank">
              <img src={proyectsImg(`./pro_web/project15.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://www.interlink.or.jp/" target="_blank">
              <img src={proyectsImg(`./pro_web/project8.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://adelec-inc.com/" target="_blank">
              <img src={proyectsImg(`./pro_web/project9.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://izumi.finance/" target="_blank">
              <img src={proyectsImg(`./pro_web/project5.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://studykartelab.com/" target="_blank">
              <img src={proyectsImg(`./pro_web/project10.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://www.jp.imbesideyou.com/" target="_blank">
              <img src={proyectsImg(`./pro_web/project6.png`)} className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://ici-skincare.com/" target="_blank">
              <img src={proyectsImg(`./pro_web/project13.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://anobakahumancapital.com/cross-work" target="_blank">
              <img src={proyectsImg(`./pro_web/project12.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://www.linktivity.co.jp/" target="_blank">
              <img src={proyectsImg(`./pro_web/project7.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://info.skyvisualeditor.com/" target="_blank">
              <img src={proyectsImg(`./pro_web/project11.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://www.moon-x.com/" target="_blank">
              <img src={proyectsImg(`./pro_web/project20.png`)} alt="" className="projects__img" />
            </a>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  )
}
export default Project;