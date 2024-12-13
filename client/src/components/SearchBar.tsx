import { useState } from "react";
import "../style/SearchBar.scss";
import SearchResults from "./SearchResults";
import { Influencer, influencers, SearchBarProps } from "../mockData";






const SearchBar: React.FC<SearchBarProps> = ({ onSelect }) => {
  const [onSearch, setOnSearch] = useState<string>("");

  const filteredInfluencers = influencers.filter((influencer) =>
    influencer.username.toLowerCase().includes(onSearch.toLowerCase())
  );

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

      {onSearch.length > 0 && (
        <SearchResults
        onSelect={handleSelectInfluencer}
        results={filteredInfluencers}
        />
      )}
      </div>
    </>
  );
};

export default SearchBar;
