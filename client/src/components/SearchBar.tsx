import { useState } from "react";
import "../style/SearchBar.scss";
import SearchResults from "./SearchResults";

export interface Influencer {
  name: string;
  username: string;
  followers: string;
  image: string;
}

const influencers: Influencer[] = [
  { name: "Itay Zoo", username: "itayz1e", followers: "486k", image: "" },
  { name: "John Doe", username: "john_doe", followers: "388k", image: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" },
  { name: "Jane Smith", username: "jane_smith", followers: "150k", image: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" },
  { name: "Itay Gon", username: "itayz1e", followers: "2152k", image: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" },
  { name: "Alice Cooper", username: "alice_cooper", followers: "621k", image: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",},
  { name: "Bob Marley", username: "bob_marley", followers: "524k", image: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" },
  { name: "reut Elma", username: "reutEM", followers: "900k", image: "" },
];

const SearchBar = () => {
  const [onSearch, setOnSearch] = useState<string>("");

  const filteredInfluencers = influencers.filter((influencer) =>
    influencer.name.toLowerCase().includes(onSearch.toLowerCase())
  );

  console.log(filteredInfluencers);

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
      {onSearch.length >  0 && (<SearchResults results={filteredInfluencers} />)}
    </>
  );
};

export default SearchBar;
