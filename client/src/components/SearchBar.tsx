import { useState } from "react";
import "../style/SearchBar.scss";

interface Influencer {
    name: string;
    username: string;
    followers: string;
    image: string;
  }

const influencers: Influencer[] = [
    { name: "Itay Zoo", username: "itayz1e", followers: '486k', image: "" },
    { name: "Itay Gon", username: "itayz1e", followers: '2152k', image: "" },
    { name: "John Doe", username: "john_doe", followers: '388k', image: "" },
    { name: "Jane Smith", username: "jane_smith", followers: '150k', image: "" },
    { name: "Alice Cooper", username: "alice_cooper", followers: '621k', image: "" },
    { name: "Bob Marley", username: "bob_marley", followers: '524k', image: "" },
  ];

const SearchBar = () => {
  const [onSearch, setOnSearch] = useState<string>("");

  const filteredInfluencers = influencers.filter((influencer) =>
    influencer.name.toLowerCase().includes(onSearch.toLowerCase())
  );

  console.log(filteredInfluencers);

  return (
    <div className="search_container">
      <input
        value={onSearch}
        type="text"
        className="search_input"
        placeholder="Search"
        onChange={(e) => setOnSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
