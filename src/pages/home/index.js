import React from "react";
import ContainerFilter from "../../components/containerFilter/index";
import "./style.css";

const Home = () => {
  return (
        <section class="home">
          <h1>Bem Vindo a Toca da Miu</h1>
          <p>
            O nosso objetivo é te ajudar a escolhar a melhor ferramenta para
            utilizar no processo de ensino - aprendizagem de crianças com o
            transtorno do espectro autista.
          </p>
          <ContainerFilter/>
        </section>
  );
};

export default Home;
