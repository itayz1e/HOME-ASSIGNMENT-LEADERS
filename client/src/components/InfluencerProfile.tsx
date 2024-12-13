import { Influencer } from "../mockData";
import "../style/InfluencerProfile.scss";
import { noImage } from "./SearchResults";

interface InfluencerProfileProps {
  influencer: Influencer;
}

const InfluencerProfile: React.FC<InfluencerProfileProps> = ({influencer,}) => {
    return (
        <div className="profile-page">
          <div className="profile-header">
            <img src={influencer.profile_image || noImage} alt="" className="profile-image" />
            <div className="profile-info">
              <div className="profile-name">
                <h2>{influencer.username}</h2>
                {influencer.isVerified && <span className="verified-badge">✔️</span>}
              </div>
              <div className="profile-stats">
                <span>{influencer.postsCount} posts</span>
                <span>{influencer.followers} followers</span>
                <span>{influencer.following || "0"} following</span>
              </div>
              <div className="profile-fullname">{influencer.name}</div>
              <div className="profile-bio">CUFF IT season</div>
              {influencer.contactInfo && <div className="profile-contact">{influencer.contactInfo}</div>}
            </div>
          </div>
          <div className="posts-grid">
            {influencer.recentPosts.map((post, index) => (
              <a key={index} className="post-item">
                <img src={post.imageUrl} alt={`Post ${index + 1}`} />
                <div className="post-overlay">
                  <span>❤️ {post.likesCount}</span>
                  <span>💬 {post.commentsCount}</span>
                  {post.viewsCount && <span>👁️ {post.viewsCount}</span>}
                </div>
              </a>
            ))}
          </div>
        </div>
      );
    };

export default InfluencerProfile;
