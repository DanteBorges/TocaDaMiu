import React from "react";
import "./style.css";
import IconEU from "../../img/IconEU.png";

const Contato = () => {
  return (
    <section class="contato">
      <img src={IconEU} alt="IconAlcatea" />
      <div class="ContatoInfo">
        <h1>Olá, eu sou o Marcus!</h1>
        <h3>
          {" "}
          Atualmente estou terminando o curso de Bacharelado em Sistemas de Informação na Universidade Estadual de Montes Claros e sou o idealizador desse projeto! Se você tem alguma dúvida ou sugestão, sinta-se livre para entrar em contato!
        </h3>
        <h4>marcusalexsanderv@gmail.com</h4>
        <h4><a href="">Instagram</a> &diams; <a href="">Linkedin</a>	&diams; <a href="">Portifólio</a></h4>
        <h4></h4>
        <h4></h4>
      </div>
    </section>
  );
};

export default Contato;
