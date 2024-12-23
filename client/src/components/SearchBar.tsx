import { useState } from "react";
import "../style/SearchBar.scss";
import SearchResults from "./SearchResults";
import { Influencer, SearchBarProps } from "../utils/interface";
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
    <div  className="search_container">
      <div>
        <input
          value={onSearch}
          type="text"
          className="search_input"
          placeholder="Search"
          onChange={(e) => setOnSearch(e.target.value)}
          />
      </div>
      <div>
      </div>
    </div>
      {onSearch.length > 0 && (
        <SearchResults
        onSelect={handleSelectInfluencer}
        results={loading ? [{ 
          username: "Loading...", 
          fullname: "Loading...", 
          followers: "", 
          picture: "", 
          user_id: "", 
          is_verified: false 
        }] : results}  />
      )}
      </>
  );
};

export default SearchBar;
