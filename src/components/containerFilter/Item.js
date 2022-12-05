import React from "react";
import "./itemStyles.css";

const Item = ({ Nome, Area, Ano, Metodologia, Custo, Disponibilidade }) => (
  <div className="item-container">
    <div>
      <span className="item-label">Nome:</span>
      {Nome}
    </div>
    <div>
      <span className="item-label">Area:</span>
      {Area}
    </div>
    <div>
      <span className="item-label">Ano:</span>
      {Ano}
    </div>
    <div>
      <span className="item-label">Metodologia:</span>
      {Metodologia}
    </div>
    <div>
      <span className="item-label">Custo:</span>
      {Custo}
    </div>
    <div>
      <span className="item-label">Disponibilidade:</span>
      {Disponibilidade}
    </div>
  </div>
);

export default Item;
