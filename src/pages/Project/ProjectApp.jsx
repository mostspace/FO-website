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
const proyectsImgApp = require.context('../../img', true);

function ProjectApp() {
    const [estadoModal18, cambiarEstadoModal18] = useState(false);
    const [estadoModal17, cambiarEstadoModal17] = useState(false);
    const [estadoModal16, cambiarEstadoModal16] = useState(false);
    const [estadoModal15, cambiarEstadoModal15] = useState(false);
    const [estadoModal14, cambiarEstadoModal14] = useState(false);
    const [estadoModal13, cambiarEstadoModal13] = useState(false);
    const [estadoModal12, cambiarEstadoModal12] = useState(false);

    return (
        <div>

            <HeaderPage />

            <ParticleBackground />

            <main>
                <section className="proyectos mas-proyect" id="proyectos">
                    <h1 className="heading">
                        <FormattedMessage
                            id='projects'
                            defaultMessage='プロジェクト'
                        />
                    </h1>
                    <nav className="navbar nav-proj">
                        <NavLink to="/project/" offset={-150} duration={500}>
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
                <section className="projects__grid apps">
                    <div className="projects__item">
                        <img src={proyectsImgApp(`./pro_app/app1.png`)} alt="" className="projects__img" />
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal14(!estadoModal14)}>
                            <img src={proyectsImgApp(`./pro_app/a_3.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                </section>
            </main>

            {/* <Modal
                estado={estadoModal18}
                cambiarEstado={cambiarEstadoModal18}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-18-com.png`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                CoinPlus
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-18-p1'
                                    defaultMessage='An app that offers exchange services for all the cryptocurrencies of the Ethereum network. You can convert dollars into cryptocurrencies, change to others and sell them to be cashed in dollars.'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-18-p2'
                                    defaultMessage='The application has an authentication system, so that the user can access their account and carry out the operations they want, it also has a section where you can see the evolution of the different cryptocurrencies.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://coin-plus.vercel.app/" target="_blank">https://coin-plus.vercel.app/</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec-2">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal> */}

            <ScrollToTop />

            <Footer />
        </div>
    )
}

export default ProjectApp
