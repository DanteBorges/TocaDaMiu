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
          Atualmente sou acadêmico de Sistemas de Informação na Universidade
          Estaudal de Montes Claros e papai da Miu! Se você tem alguma duvida ou
          sujestão, sinta-se livre para entrar em contato!
        </h3>
        <h4>E-mail: marcus@miu.com.br</h4>
      </div>
    </section>
  );
};

export default Contato;
