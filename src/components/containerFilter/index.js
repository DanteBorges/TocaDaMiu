import React, { useEffect, useMemo, useState } from "react";
import Item from "./Item.js";
import "./styles.css";

const ContainerFilter = () => {
  // const [sportList, setSportList] = useState([]);
  const [filtersArea, setFiltersArea] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();
  const [selectCost, setSelectedCost] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:3003/dados_para_filtro", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setFiltersArea(data);
      });
  }, []);

  function getFilteredList() {
    if (!selectedCategory) {
      return filtersArea;
    }
    return filtersArea.filter(
      (item) =>
        (item.Area === selectedCategory) && (item.Custo === selectCost)
    );
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory,selectCost, filtersArea]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleCost(event) {
    setSelectedCost(event.target.value);
  }

  return (
    <div className="app">
      <div className="filter-container">
        <div>Filtrar por Area:</div>
        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="Lingua Portuguesa">Lingua Portuguesa</option>
            <option value="Diversas">Diversas</option>
            <option value="Matemática">Matemática</option>
          </select>
        </div>
      </div>

      <div className="filter-container">
        <div>Filtrar por Custo:</div>
        <div>
          <select name="category-list" id="category-list" onChange={handleCost}>
            <option value="">All</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>
      </div>

      <div className="sport-list">
        {filteredList.map((element, index) => (
          <Item {...element} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ContainerFilter;
