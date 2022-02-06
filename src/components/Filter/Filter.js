const Filter = ({ setFilterOptions, filterOptions }) => {
  return (
    <>
      <div className="filter">
        <p className="filter__title">Filter by:</p>
        <div className="filter__type">
          <label className="filter__label" htmlFor="year-filter">
            Year:
          </label>
          <select
            onChange={(event) =>
              setFilterOptions({ ...filterOptions, year: event.target.value })
            }
            className="filter__box"
            name="year-filter"
            id="year-filter"
          >
            <option className="filter__option" value="">
              All
            </option>
            <option className="filter__option" value="2020-3000">
              After 2020
            </option>
            <option className="filter__option" value="2000-2020">
              2000-2020
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
            onChange={(event) =>
              setFilterOptions({
                ...filterOptions,
                runtime: event.target.value,
              })
            }
            className="filter__box"
            name="runtime-filter"
            id="runtime-filter"
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
            onChange={(event) =>
              setFilterOptions({
                ...filterOptions,
                rating: event.target.value,
              })
            }
            className="filter__box"
            name="rating-filter"
            id="rating-filter"
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
      </div>
    </>
  );
};

export default Filter;
