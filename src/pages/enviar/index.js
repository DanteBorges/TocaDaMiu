import React from "react";
import "./style.css";
import Alcatea from "../../img/alcatea.png";

const Enviar = () => {
  return (
    <div>
      <section class="enviar">
        <div class="EnviarInfo">
          <img src={Alcatea} alt={"Loba cinza uivando"} />
          <h1>Você deseja ajudar sugerindo uma ferramenta?</h1>
          <h3>
            Basta preencher o formulário ao lado com os dados requisitados que
            analisaremos a sua sugestão!
          </h3>
        </div>

        <form
          id="fs-frm"
          name="complaint-form"
          accept-charset="utf-8"
          action="https://formspree.io/f/xdojbaek"
          method="post"
        >
          <form id="fs-frm-inputs">
            <label class="label" for="full-name">
              Nome Completo
            </label>
            <input
              class="input"
              type="text"
              name="name"
              id="full-name"
              placeholder="Nome e Sobrenome"
              required=""
            />
            <label class="label" for="email-address">
              Endereço de e-mail
            </label>
            <input
              class="input"
              type="email"
              name="_replyto"
              id="email-address"
              placeholder="email@email.com"
              required=""
            />
            <label class="label" for="telephone">
              Telefone (Opicional)
            </label>
            <input
              class="input"
              type="telephone"
              name="telephone"
              id="telephone"
              placeholder="(ddd) x xxxx-xxxx"
            />
            <label class="label" for="complaint">
              Descrição
            </label>
            <textarea
              class="input"
              rows="6"
              name="Descrição da Ferramenta"
              id="complaint"
              placeholder="Descreve aqui informações relevantes sobre a ferramenta que deseja enviar, como: Nome; Área do conhecimento; Link para acesso; etc."
              required=""
            ></textarea>
            <input
              class="input"
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Complaint Form Submission"
            />
          </form>
          <input class="button" type="submit" value="Enviar" />
        </form>
      </section>
    </div>
  );
};

export default Enviar;
