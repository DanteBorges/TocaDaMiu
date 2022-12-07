import "./style.css";
import React from "react";
import { useForm } from "@formspree/react";

const Enviar = () => {
  const [state, handleSubmit] = useForm("xdojbaek");
  if (state.succeeded) {
    return (
      <p>Obrigado por enviar!! Vamos analisar o envio e retornamos a você.</p>
    );
  }
  return (
    <div>
      <section class="enviar">
        <div class="EnviarInfo">
          <h1>Você deseja ajudar sugerindo uma ferramenta?</h1>
          <h3>
            Preencha o formulário abaixo com os dados requisitados que
            analisaremos a sua sugestão!
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
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
            placeholder="Descreva aqui informações relevantes sobre a ferramenta que deseja enviar, como: Nome; Área do conhecimento; Link para acesso; etc."
            required=""
          ></textarea>

          <button
            class="button"
            type="submit"
            disabled={state.submitting}
            value="Enviar"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
};

export default Enviar;
