import { useMemo, useState } from "react";
import "../style/SearchBar.scss";
import SearchResults from "./SearchResults";
import { Influencer, influencers, SearchBarProps } from "../mockData";

const SearchBar: React.FC<SearchBarProps> = ({ onSelect }) => {
  const [onSearch, setOnSearch] = useState<string>("");

  const filteredInfluencers = useMemo(() => {
    return influencers.filter((influencer) =>
      influencer.name.toLowerCase().includes(onSearch.toLowerCase())
    );
  }, [onSearch])

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
      {onSearch.length > 0 && (
        <SearchResults
          onSelect={handleSelectInfluencer}
          results={filteredInfluencers}
        />
      )}
    </>
  );
};

export default SearchBar;
