import React from "react";
import ContainerFilter from "../../components/containerFilter/index";
import "./style.css";

const Home = () => {
  return (
        <section class="home">
          <h1>Bem-Vindo a nossa alcateia!</h1>
          <p>
            O nosso objetivo é demonstrar um método de avaliação de ferramentas tecnológicas voltadas para o auxílio do processo de ensino-aprendizado de crianças com TEA, auxiliando assim a escolha da ferramenta mais adequada a ser utilizada neste processo. Você pode conferir mais detalhes sobre o projeto AlcaTEA na guia “Sobre o Projeto” dentro do menu acima. 
            As ferramentas encontradas e avaliadas de acordo com o método proposto se encontram abaixo:
          </p>
          <ContainerFilter/>
        </section>
  );
};

export default Home;
