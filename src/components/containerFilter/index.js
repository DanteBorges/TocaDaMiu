import { useEffect, useState } from "react";
import "./styles.css";

const ContainerFilter = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["Metodologia", "Nome"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  useEffect(() => {
    fetch("http://127.0.0.1:3003/dados_para_filtro")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(isLoaded)
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const data = Object.values(items);

  function search(items) {
    return items.filter((item) => {
      if (item.Area === filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam === "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  if (error) {
    return (
      <p>
        {error.message}, if you get this error, the free API I used might have
        stopped working, but I created a simple example that demonstrate how
        this works,{" "}
        <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">
          {" "}
          check it out{" "}
        </a>{" "}
      </p>
    );
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="wrapper">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <span className="sr-only">Search countries here</span>
          </label>

          <div className="select">
            <select
              onChange={(e) => {
                setFilterParam(e.target.value);
              }}
              className="custom-select"
              aria-label="Filter Countries By Region"
            >
              <option value="All">Filter By Region</option>
              <option value="Lingua Portuguesa">Portuguesa</option>
              <option value="Diversas">Diversas</option>
              <option value="Matemática">Matemática</option>
            </select>
            <span className="focus"></span>
          </div>
        </div>
        <ul className="card-grid">
          {search(data).map((item) => (
            <li>
              <article className="card" key={item.ID}>
                <div className="card-content">
                  <h2 className="card-name">{item.Nome}</h2>
                  <ol className="card-list">
                    <li>
                      population: <span>{item.Area}</span>
                    </li>
                    <li>
                      Region: <span>{item.Ano}</span>
                    </li>
                    <li>
                      Capital: <span>{item.Metodologia}</span>
                    </li>
                  </ol>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
export default ContainerFilter;
