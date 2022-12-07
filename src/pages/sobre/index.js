import React from "react";
import "./style.css";
import Alcatea from "../../img/mainALCA.png";
import Loba from "../../img/lobinhaSentada.png";

const Sobre = () => {
  return (
    <section class="sobre">
      <div class="flexSobre">
      <div class="SobreInfo">
        <h1>AlcaTEA</h1>
        <p>
          Esse é o projeto AlcaTEA, ele é fruto de um trabalho de conclusão de curso intitulado "Estudo de ferramentas tecnológicas educacionais desenvolvidas para auxiliar o processo de ensino-aprendizagem de crianças com Transtorno do Espectro Autista (TEA)" desenvolvido por Marcus Alexsander Vasconcelos e orientado pela professora Mestra Christine Martins de Matos.{" "}
        </p>
        <p>
          {" "}
          Com o objetivo de compartilhar os resultados obtidos no trabalho, a Miu, nossa lobinha tem a missão de espalhar as ferramentas encontradas e fomentar a comunidade de pessoas que convivem com o processo de ensino e aprendizagem de crianças com TEA.{" "}
        </p>
        <p>
          Para ter acesso ao trabalho e verificar os resultados obtidos na integra, basta clicar aqui{" "}
          <a href="https://drive.google.com/drive/folders/1UET8gkaivYdRqdsCL-yi6MYOEFXx4DoG?usp=share_link">
            aqui
          </a>
          .{" "}
        </p>
      </div>
      <img src={Loba} alt={"Loba cinza uivando"} />
      </div>
      <div class="flexResto">
      <img src={Alcatea} alt={"lobo cinza com escrito emabixo alcatea"} />
      <div class="RestoDoTexto">
      <p>
      O trabalho que norteou o desenvolvimento dessa plataforma digital teve por objetivo desenvolver um método de avaliação de ferramentas tecnológicas voltadas para o auxílio do processo de ensino-aprendizado de crianças com TEA, buscando identificar, analisar, descrever as ferramentas e desenvolver um ambiente tecnológico para apoiar na exposição de ferramentas educacionais para crianças com TEA, desenvolvidas em língua portuguesa, a fim de proporcionar inclusão e qualidade no processo de ensino-aprendizagem para essas crianças.
      </p>
      <p>
      Sobre a temática de análise de ferramentas tecnológicas educacionais para TEA, o trabalho utilizou de uma Revisão Sistemática de Literatura para encontrar seus resultados.
      </p>
      <p>
      Foram encontradas sete ferramentas que, por sua vez, foram analisadas a fim de responder as sete perguntas de pesquisa que nortearam o trabalho em busca de identificar as características presentes nessas ferramentas. 
      </p>
      <p>
      A partir do método proposto e presente no trabalho, é possível classificar campos capazes de agrupar as ferramentas encontras, de modo a possibilitar a indicação dessas, sendo esses campos: “Área do conhecimento”, "Ano de desenvolvimento", "Metodologia de desenvolvimento", "Custo" e "Disponibilidade". Todos esses campos são encontrados na descrição das ferramentas, presentes na página inicial desse site. 
      </p>
      <p>&nbsp;</p>
      </div>
      </div>
    </section>
  );
};

export default Sobre;
