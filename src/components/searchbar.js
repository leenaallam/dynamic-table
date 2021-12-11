import { ReactComponent as Searchicon } from "../icons/search.svg";

import "../stylesheets/search.css";
const Searchbar = () => {
  return (
    <div>
      <div className="searchbar">
        {" "}
        <Searchicon className="searchicon" />
        <label className="searchname">
          <input
            style={{
              border: "none",
              outline: "none",
              color: "#90a0b7",
              fontSize: "1vw",
            }}
            placeholder="Search"
          />
        </label>
      </div>
    </div>
  );
};
export default Searchbar;
