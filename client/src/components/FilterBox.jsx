import { BsSearch, BsRepeat } from "react-icons/bs";
import { Tooltip } from "@mui/material";

const FilterBox = ({ setSearchCity, inputCity, setInputCity }) => {
  const handleCitySearch = () => {
    setSearchCity(inputCity);
  };

  return (
    <section className="flex items-center space-x-2.5 text-slate-700">
      <input
        type="text"
        placeholder="Search city"
        name={inputCity}
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        className="py-1 outline-none w-full"
        spellCheck="false"
      />
      <BsSearch
        onClick={handleCitySearch}
        className="text-2xl text-cyan-500 cursor-pointer"
      />
      <BsRepeat
        onClick={() => {
          setInputCity("");
          setSearchCity("");
        }}
        className="text-2xl text-cyan-500 cursor-pointer"
      />
    </section>
  );
};

export default FilterBox;
