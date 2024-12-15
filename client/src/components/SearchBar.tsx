import { useMemo, useState, useEffect } from "react";
import axios from "axios";
import "../style/SearchBar.scss";
import SearchResults from "./SearchResults";
import { ApiResponse, Influencer, SearchBarProps } from "../interface";

const SearchBar: React.FC<SearchBarProps> = ({ onSelect }) => {
  const [onSearch, setOnSearch] = useState<string>("");
  const [results, setResults] = useState<Influencer[]>([]);

  useEffect(() => {
    const fetchInfluencers = async () => {
      if (onSearch.trim() === "") {
        setResults([]);
        return;
      }
      try {
        const response = await axios.get<ApiResponse>(`http://localhost:3000/influencer/users?q=${onSearch}`);
        setResults(response.data.data);
      } catch (error) {
        console.error("Error fetching influencers:", error);
      }
    };

    fetchInfluencers();
  }, [onSearch]);

  const filteredInfluencers = useMemo(() => results, [results]);
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
