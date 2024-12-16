import { SearchResultsProps } from "../utils/interface";
import "../style/SearchResults.scss";
import { formatNumber, noPicture } from "../utils/helpers";


const SearchResults: React.FC<SearchResultsProps> = ({ results, onSelect }) => {
  return (
    <div className="results_container">
      {results.length > 0 ? (
        <div className="results_list">
          {results.map((influencer) => (
            <div onClick={() => onSelect(influencer)} key={influencer.username} className="result_item">
              <div className="result_image">
                <img src={influencer.picture || noPicture} alt="" />
              </div>
              <div className="result_info">
                <div className="result_username">@{influencer.username}</div>
                <div className="result_name">{influencer.fullname}</div>
              </div>
              <div className="result_followers">{formatNumber(influencer.followers)}</div>
            </div>
          ))}
        </div>
      ) : (
        <p>No results.</p>
      )}
    </div>
  );
};

export default SearchResults;
