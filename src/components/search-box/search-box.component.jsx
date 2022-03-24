import "./search-box.styles.css";

const SearchBox = (props) => {
  return (
    <div>
      <input
        type="search"
        className={`search-box ${props.className}`}
        placeholder={props.placeholderHandler}
        onChange={props.onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
