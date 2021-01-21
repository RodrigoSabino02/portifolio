import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            olá meu nome e Rodrigo sou desenvolvedor Front-End, 
            atualmente faço faculdade de ciência da computação na Universidade de Fortaleza. 
            Amo estudar Tecnologias e desenvolver soluções para os problemas enfrentados pela sociedade, 
            com abordagens iterativas para a estratégia corporativa estimulam o pensamento colaborativo para promover a proposta de valor geral.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Desenvolvedor Web</h3>
              <div className="subheading mb-3">MyProject Solutions</div>
              <p>
                desenvolvia aplicaçoes web com React,com metodologia agile,participava de todo desenvolvimento
                da aplicaçao desde de reunioes com o cliente ate o produto final,nesse periodo desenvolvi habilidade
                de gerencia de projetos, em 2020 virei vice-presidente da empresa e diretor de projetos e comecei a liderar
                equipes de desenvolvimento.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Mar 2019 - Present</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Educaçao</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Universidade de Fortaleza</h3>
              <div className="subheading mb-3">Ciencia da computação</div>
              <div>Ciencia da computação - Desenvolvimento Web</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fev 2019 - Dec 2024</span>
            </div>
          </div>  
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-next-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
          Além de ser um desenvolvedor web, eu aproveito a maior parte do tempo ao ar livre. 
          gosto de sempre sair com os amigos, ir pra praia, jogar futebol
          </p>
          <p className="mb-0">
          Quando forçado a ficar dentro de casa, gosto de assistir filmes e series de comedia ou romance, 
          jogando gta,cs ou lol e passo grande parte do meu tempo livre explorando os mais recentes avanços
          tecnológicos no mundo do desenvolvimento front-end da web.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              DoWhile 2020 - Rockectseat
            </li>
            
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
