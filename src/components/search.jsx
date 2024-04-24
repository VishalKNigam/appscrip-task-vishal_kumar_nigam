import { CiSearch } from "react-icons/ci";
import { useAppScriptContext } from "@/context/appscriptContext";
import { useState } from "react";

export default function Search() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { dispatch } = useAppScriptContext();

  const handleSearchVisibility = () => setIsSearchVisible(!isSearchVisible);

  const handleSearchValue = (e) =>
    dispatch({ type: "setSearchValue", payload: { value: e.target.value } });

  return (
    <div className="search-container">
      <input
        className={`show-search ${!isSearchVisible ? "hide-search" : ""}`}
        type="search"
        placeholder="Search Products"
        onChange={handleSearchValue}
      />
      <button type="button" onClick={handleSearchVisibility}>
        <CiSearch />
      </button>
    </div>
  );
}
