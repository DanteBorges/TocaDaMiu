import React from "react";
import "./style.css";
import Alcatea from "../../img/mainALCA.png";

const Sobre = () => {
  return (
    <section class="sobre">
      <div class="SobreInfo">
        <h1>Nosso projeto</h1>
        <p>
          Esse é o projeto AlcaTEA, ele é fruto de um trabalho de conclusão de
          curso intitulado "Estudo de ferramentas tecnológicas educacionais
          desenvolvidas para auxiliar o processo de ensino-aprendizagem de
          crianças com Transtorno do Espectro Autista (TEA)" desenvolvido por
          Marcus Alexsander Vasconcelos e orientado pela professora Mestra
          Christine Martins de Matos.{" "}
        </p>
        <p>
          {" "}
          Com o objetivo de compartilhar os resultados obtidos no trabalho, a
          Miu, nossa lobinha tem a missão de espalhar as ferramentas encontradas
          e fomentar a comunidade de pessoas que convivem com o processo de
          ensino e aprendizagem de crianças com TEA.{" "}
        </p>
        <p>
          Para ter acesso ao trabalho e verificar os resultados obtidos na
          integra, basta clicar{" "}
          <a href="https://drive.google.com/drive/folders/1UET8gkaivYdRqdsCL-yi6MYOEFXx4DoG?usp=share_link">
            aqui
          </a>
          .{" "}
        </p>
      </div>
      <img src={Alcatea} alt={"Loba cinza uivando"} />

    </section>
  );
};

export default Sobre;
