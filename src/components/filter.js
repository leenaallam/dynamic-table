import { ReactComponent as Filterr } from "../icons/filter.svg";
import "../stylesheets/table.css";

const Filter = () => {
  return (
    <div>
      <div className="filter">
        <label className="category">
          Catergory: {<label className="all"> All </label>} {<Filterr />}
        </label>
      </div>
    </div>
  );
};
export default Filter;
