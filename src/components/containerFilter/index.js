import React, { useEffect, useMemo, useState } from "react";
import Item from "./Item.js";
import "./styles.css";

const ContainerFilter = () => {
  // const [sportList, setSportList] = useState([]);
  const [filtersArea, setFiltersArea] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:3003/informacoes_das_ferramentas", {
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
        (item.Area === selectedCategory)
    );
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory, filtersArea]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="app">
      <div className="filter-container">
        <div>Filtrar pela área de conhecimento:</div>
        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">Todas</option>
            <option value="Lingua Portuguesa">Lingua Portuguesa</option>
            <option value="Diversas">Diversas</option>
            <option value="Matemática">Matemática</option>
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
