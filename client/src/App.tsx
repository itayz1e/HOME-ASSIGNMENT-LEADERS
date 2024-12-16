import { useState } from "react";
import "./style/App.scss";
import SearchBar from "./components/SearchBar";
import { Influencer } from "./utils/interface";
import InfluencerProfile from "./components/influenceProfle";

function App() {
  const [selectedInfluencer, setSelectedInfluencer] = useState<Influencer | null>(null);

  const handleSelectInfluencer = (influencer: Influencer) => {
    setSelectedInfluencer(influencer);
  };

  return (
    <div className="fullPage">
      <div>
      <SearchBar onSelect={handleSelectInfluencer} />
      </div>
      <div>
      {selectedInfluencer && (
        <InfluencerProfile influencer={selectedInfluencer} />
      )}
      </div>
    </div>
  );
}

export default App;
