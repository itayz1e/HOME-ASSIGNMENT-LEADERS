import { useState } from "react";
import "./style/App.scss";
import SearchBar from "./components/SearchBar";
import InfluencerProfile from "./components/InfluencerProfile";
import { Influencer } from "./interface";

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
