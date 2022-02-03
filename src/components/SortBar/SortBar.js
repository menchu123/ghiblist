import "./SortBar.scss";

const SortBar = ({ setOrder, order }) => {
  const onChangeOrder = (event) => {
    if (event.target.checked) {
      setOrder(event.target.value);
    }
  };
  return (
    <section className="sort-bar">
      <p className="sort-bar__title">Sort by:</p>
      <div className="sort-bar__buttons">
        <div className="sort-bar__button">
          <input
            type="radio"
            name="sortby"
            value="title"
            id="title"
            className="sort-bar__input"
            checked={order === "title"}
            onChange={onChangeOrder}
          />
          <label htmlFor="title" className="sort-bar__label">
            Title
          </label>
        </div>
        <div className="sort-bar__button">
          <input
            type="radio"
            name="sortby"
            value="release_date"
            id="release_date"
            className="sort-bar__input"
            checked={order === "release_date"}
            onChange={onChangeOrder}
          />
          <label htmlFor="release_date" className="sort-bar__label">
            Year
          </label>
        </div>
        <div className="sort-bar__button">
          <input
            type="radio"
            name="sortby"
            value="rt_score"
            id="rt_score"
            className="sort-bar__input"
            checked={order === "rt_score"}
            onChange={onChangeOrder}
          />
          <label htmlFor="rt_score" className="sort-bar__label">
            Rating
          </label>
        </div>
        <div className="sort-bar__button">
          <input
            type="radio"
            name="sortby"
            value="running_time"
            id="running_time"
            className="sort-bar__input"
            checked={order === "running_time"}
            onChange={onChangeOrder}
          />
          <label htmlFor="running_time" className="sort-bar__label">
            Runtime
          </label>
        </div>
      </div>
    </section>
  );
};

export default SortBar;
