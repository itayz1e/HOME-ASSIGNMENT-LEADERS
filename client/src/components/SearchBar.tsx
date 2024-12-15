import { useState } from "react";
import "../style/SearchBar.scss";
import SearchResults from "./SearchResults";
import { Influencer, SearchBarProps } from "../interface";
import useSearchInfluencers from "../hooks/useSearchInfluencers";

const SearchBar: React.FC<SearchBarProps> = ({ onSelect }) => {
  const [onSearch, setOnSearch] = useState<string>("");
  const { results, loading } = useSearchInfluencers(onSearch);

  const handleSelectInfluencer = (influencer: Influencer) => {
    onSelect(influencer);
    setOnSearch("");
  };

  return (
    <>
      <div className="search_container">
        <input
          value={onSearch}
          type="text"
          className="search_input"
          placeholder="Search"
          onChange={(e) => setOnSearch(e.target.value)}
        />
      </div>
      <div>
      {onSearch.length > 0 && (
        <SearchResults
        onSelect={handleSelectInfluencer}
        results={results}
        />
        
      )}
      {loading && <p className="loading">Loading...</p>}
      </div>
    </>
  );
};

export default SearchBar;
