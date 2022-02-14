import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import "./Filter.scss";

const Filter = ({ addToFilter, removeAllFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const yearsFilter = useRef();
  const ratingsFilter = useRef();
  const runtimeFilter = useRef();

  const removeFilters = () => {
    removeAllFilters();
    yearsFilter.current.value = "";
    ratingsFilter.current.value = "";
    runtimeFilter.current.value = "";
  };

  return (
    <>
      <button
        className={`open-filter${isOpen ? " open-button" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBarsStaggered} />
        )}
      </button>
      <section className={`filter${isOpen ? " filter--visible" : ""}`}>
        <section
          className={`closing-space${isOpen ? " closing-space--visible" : ""}`}
          onClick={() => setIsOpen(false)}
        ></section>
        <p className="filter__title">Filter by:</p>
        <div className="filter__type">
          <label className="filter__label" htmlFor="year-filter">
            Year:
          </label>
          <select
            onChange={(event) => addToFilter(event, "year")}
            className="filter__box"
            name="year-filter"
            id="year-filter"
            ref={yearsFilter}
          >
            <option className="filter__option" value="">
              All
            </option>
            <option className="filter__option" value="2020-3000">
              After 2020
            </option>
            <option className="filter__option" value="2010-2020">
              2010-2020
            </option>
            <option className="filter__option" value="2000-2010">
              2000-2010
            </option>
            <option className="filter__option" value="1990-2000">
              1990-2000
            </option>
            <option className="filter__option" value="1980-1990">
              1980-1990
            </option>
          </select>
        </div>
        <div className="filter__type">
          <label className="filter__label" htmlFor="runtime-filter">
            Runtime:
          </label>
          <select
            onChange={(event) => addToFilter(event, "runtime")}
            className="filter__box"
            name="runtime-filter"
            id="runtime-filter"
            ref={runtimeFilter}
          >
            <option className="filter__option" value="">
              All
            </option>
            <option className="filter__option" value="120-300">
              Over 120min
            </option>
            <option className="filter__option" value="90-120">
              90-120min
            </option>
            <option className="filter__option" value="0-90">
              90min or less
            </option>
          </select>
        </div>
        <div className="filter__type">
          <label className="filter__label" htmlFor="rating-filter">
            Rating:
          </label>
          <select
            onChange={(event) => addToFilter(event, "rating")}
            className="filter__box"
            name="rating-filter"
            id="rating-filter"
            ref={ratingsFilter}
          >
            <option className="filter__option" value="">
              All
            </option>
            <option className="filter__option" value="95-100">
              Over 95%
            </option>
            <option className="filter__option" value="85-95">
              85-95%
            </option>
            <option className="filter__option" value="75-85">
              75-85%
            </option>
            <option className="filter__option" value="0-75">
              75% or less
            </option>
          </select>
        </div>
        <button className="remove-filters" onClick={removeFilters}>
          Remove filters
        </button>
      </section>
    </>
  );
};

export default Filter;
