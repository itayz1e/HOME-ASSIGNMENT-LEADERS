import { SearchResultsProps } from "../interface";
import "../style/SearchResults.scss";



export const noImage ="https://media.istockphoto.com/id/1142192548/vector/man-avatar-profile-male-face-silhouette-or-icon-isolated-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=DUKuRxK9OINHXt3_4m-GxraeoDDlhNuCbA9hp6FotFE=";

const SearchResults: React.FC<SearchResultsProps> = ({ results, onSelect }) => {
  return (
    <div className="results_container">
      {results.length > 0 ? (
        <div className="results_list">
          {results.map((influencer) => (
            <div onClick={() => onSelect(influencer)} key={influencer.username} className="result_item">
              <div className="result_image">
                <img src={influencer.picture || noImage} alt="" />
              </div>
              <div className="result_info">
                <div className="result_username">@{influencer.username}</div>
                <div className="result_name">{influencer.fullname}</div>
              </div>
              <div className="result_followers">{influencer.followers}</div>
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
