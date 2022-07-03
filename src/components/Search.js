import style from "./Search.module.css";


const Search = () => {
    const handleChange = (event) => {
    console.log(event.target.value);
  };

  return(
    <div className={style.searchContainer}>
      <label htmlFor="search " className={style.search} >Search:</label>
      <input id="search" type="text"  onChange={handleChange}></input>
    </div>
  )
};

export default Search;