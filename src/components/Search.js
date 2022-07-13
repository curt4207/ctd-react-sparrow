import style from "./SearchSort.module.css";
import {PropTypes} from "prop-types";
import {motion} from "framer-motion";


const Search = ({onSearch, toggleSort}) => {

  function handleChange (event) {
    onSearch(event.target.value)
  }

  return(
    <div className={style.searchContainer}>
      <label htmlFor="search" className={style.search} >Search:</label>
      <input id="search" type="search" placeholder="Enter Search..." onChange={handleChange}/>
     
      <motion.button 
      id='sortButton' 
      className={style.sortButton} 
      onClick={toggleSort} 
      whileHover={{
        scale: 1.2
      }}>
        Sort Button
      </motion.button>
    </div>
  )
};

Search.propTypes = {
  onSearch: PropTypes.func,
  toggleSort: PropTypes.func
}
export default Search;